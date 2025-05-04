import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, alert, Alert } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import styles from '../styles/ProductDetailsStyles';
import { useNavigation } from '@react-navigation/native';
import i18n from '../i18n/i18n';
import products from './productData';
import { ThemeContext } from '../context/ThemeContext'; // ✅ ThemeContext import
import { UserContext } from '../context/UserContext'; // ✅ UserContext import
import config from '../config';
export default function ProductDetails({ route }) {
  const productId = route?.params?.productId;
  const product = products.find(p => p.id === productId) || {};
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext); // ✅ access theme colors
  const { user } = useContext(UserContext); // ✅ access user context
  const [selectedColor, setSelectedColor] = useState(product.defaultColor || 'white');
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = async () => {
    try {
      const response = await fetch(`${config.BASE_URL}/api/favorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: product.id,
          name: product.name,
          image: product.image,
          description: product.description,
        }),
      });

      if (response.ok) {
        console.log(i18n.t('addedToFavorites'));
        setIsFavorite(true);
      } else {
        console.error(i18n.t('failedToAdd'));
      }
    } catch (error) {
      console.error(i18n.t('errorAdding'), error);
    }
  };

  const handleTryInHome = () => {
    if (user) {
      // ✅ user is logged in
      navigation.navigate('SofaARView', {
        product: { ...product, defaultColor: selectedColor },
      });
    } else {
      // ⚠️ user is not logged in → navigate to Login/Signup
      Alert.alert(
        i18n.t('loginRequired'),
        i18n.t('pleaseLoginToContinue'),
        [
          {
            text: i18n.t('cancel'),
            style: 'cancel',
          },
          {
            text: i18n.t('login'),
            onPress: () => navigation.navigate('Login'), // or 'Signup'
          },
        ],
        { cancelable: true }
      );
    }
  };
  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.container, { backgroundColor: colors.card }]}>
        {/* Header */}
        <View style={[styles.header,]}>
          <View style={styles.headerIconContainer}>
            <View style={styles.headerWrapper}>
              <View style={[styles.headerOval]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
                  <Ionicons name="arrow-back" size={24} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle ]}>{i18n.t('details')}</Text>
                <TouchableOpacity style={{paddingRight:18}}onPress={() => navigation.navigate('Profile')}>
                  <Ionicons name="person-outline" size={24}  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Product Image */}
        <View style={styles.productImageContainer}>
          <Image source={product.image} style={styles.productImage} />
        </View>

        {/* Try in AR */}
        <TouchableOpacity
          onPress={handleTryInHome}
          style={[styles.arButton, { backgroundColor: colors.card }]}
        >
          <Feather name="camera" size={20} color={colors.text} />
          <Text style={[styles.arButtonText, { color: colors.text }]}>
            {i18n.t('tryInHome')}
          </Text>
        </TouchableOpacity>

        {/* Product Info */}
        <View style={[styles.productInfo, { backgroundColor: colors.card }]}>
          <View style={styles.titleRow}>
            <Text style={[styles.productTitle, { color: colors.text }]}>{product.name}</Text>
            <TouchableOpacity onPress={addToFavorites}>
              <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={22}
                color={isFavorite ? 'red' : 'gray'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.ratingRow}>
            {[...Array(5)].map((_, index) => (
              <Ionicons key={index} name="star" size={18} color="#FFD700" />
            ))}
          </View>

          <Text style={[styles.description, { color: colors.text }]}>
            {product.description || i18n.t('noDescription')}{' '}
            <Text style={{ color: 'blue' }}>{i18n.t('readMore')}</Text>
          </Text>

          <View style={styles.colorOptions}>
            {(product.colors || ['white', 'black', 'grey']).map((color) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorDot,
                  {
                    backgroundColor: color,
                    borderWidth: selectedColor === color ? 2 : 0,
                    borderColor: '#000',
                  },
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Products')}
              style={[styles.buyNowButton, { backgroundColor: '#2c5f46' }]} // your green color
            >
              <Text style={[styles.buttonText, { color: '#fff' }]}>{i18n.t('done')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
