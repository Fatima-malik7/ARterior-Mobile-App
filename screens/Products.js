import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext'; // ✅ Import ThemeContext
import styles from '../styles/ProductsStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../i18n/i18n';
import products from './productData';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import config from '../config';
export default function Products() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const { colors } = React.useContext(ThemeContext); // ✅ Use ThemeContext
const sliderPosition = useSharedValue(0); // Shared value for slider position
  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add product to the backend
  const addProductToBackend = async (product) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const imageName = product.imageName || '';

      if (!imageName || !product.name) {
        console.error('Image name or product name is missing');
        return;
      }

      const response = await fetch(`${config.BASE_URL}/api/furniture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: product.name,
          imageName: imageName,
          description: product.description || '',
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Product added to backend:', result);
      } else {
        const errorText = await response.text();
        console.error('Failed to add product:', response.statusText, errorText);
      }
    } catch (error) {
      console.error('Error adding product to backend:', error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: colors.text }]}>{i18n.t('products')}</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#aaa"style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, { color: colors.text, borderColor: colors.border }]}
          placeholder={i18n.t('searchProducts')}
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Products Grid */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.productContainer, { backgroundColor: colors.card }]}
            onPress={() => {
              addProductToBackend(item); 
              navigation.navigate('ProductDetails', { productId: item.id });
            }}
          >
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={[styles.name,{ color: colors.text }]}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Navigation Bar */}
      <View style={[styles.bottomNav, { backgroundColor: colors.card }]}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24}  color="#2c5f46" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name="heart-outline" size={24} color="#2c5f46" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <View style={[styles.cameraButton, ]}>
            <Ionicons name="camera-outline" size={28} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <Ionicons name="list-outline" size={24} color="#2c5f46" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="#2c5f46"  />
        </TouchableOpacity>
      </View>
      {/* Slider Animation */}
      <Animated.View
            style={[
              styles.slider,
              {
                transform: [{ translateX: sliderPosition.value * 60 }],
              },
            ]}
          />
    </View>
    
  );
}
