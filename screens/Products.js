import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/HomeStyles';  // Use same styles as Home
// import styles from '../styles/ProductsStyles'; // Adjust the path as necessary
const products = [
  {
    id: '1',
    name: 'White Three-Seater Sofa',
    image: require('../assets/WhiteThreeSeaterSofa.jpg'),
  },
  {
    id: '2',
    name: 'Black Leather Sofa',
    image: require('../assets/WhiteThreeSeaterSofa.jpg'),
  },
  {
    id: '3',
    name: 'Red Velvet Sofa',
    image: require('../assets/WhiteThreeSeaterSofa.jpg'),
  },
  {
    id: '4',
    name: 'Blue Modern Sofa',
    image: require('../assets/WhiteThreeSeaterSofa.jpg'),
  },
];

export default function Products() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Products</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Products Grid */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100 }} // so bottom nav doesn’t cover content
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="#2c5f46" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name="heart-outline" size={24} color="#2c5f46" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <View style={styles.cameraButton}>
            <Ionicons name="camera-outline" size={28} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <Ionicons name="list-outline" size={24} color="#2c5f46" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="#2c5f46" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
