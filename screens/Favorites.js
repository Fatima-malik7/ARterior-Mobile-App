import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import styles from '../styles/FavoritesStyles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import i18n from '../i18n/i18n';
import products from './productData';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext'; // ✅ Added
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import config from '../config';

const Favorites = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);
  const { colors } = useContext(ThemeContext);
  const { user } = useContext(UserContext); // ✅ Get user context

  const sliderPosition = useSharedValue(1);

  useEffect(() => {
    if (user && user._id) {
      fetchFavorites();
    }
  }, [user]);

  const fetchFavorites = async () => {
    try {
      const response = await fetch(`${config.BASE_URL}/api/favorites`);
      const data = await response.json();
      setFavorites(data);
    } catch (error) {
      console.error(i18n.t('errorFetchingFavorites'), error);
    }
  };

  const handleUnsave = async (_id) => {
    try {
      const response = await fetch(`${config.BASE_URL}/api/favorites/${_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setFavorites((prev) => prev.filter((item) => item._id !== _id));
      } else {
        Alert.alert(i18n.t('error'), i18n.t('removeFavoriteFailed'));
      }
    } catch (error) {
      console.error(i18n.t('errorRemovingFavorite'), error);
    }
  };

  const renderFavorite = ({ item }) => {
    const matchedProduct = products.find(p => p.name === item.name);

    return (
      <TouchableOpacity
        onPress={() => {
          if (matchedProduct) {
            navigation.navigate('ProductDetails', { productId: matchedProduct.id });
          } else {
            Alert.alert('Error', 'Product details not found.');
          }
        }}
      >
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <View style={styles.imageContainer}>
            {matchedProduct?.image && (
              <Image source={matchedProduct.image} style={styles.image} resizeMode="contain" />
            )}
          </View>

          <View style={styles.info}>
            <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
            <Text style={[styles.description, { color: colors.text }]}>{item.description}</Text>
            <TouchableOpacity style={styles.unsaveBtn} onPress={() => handleUnsave(item._id)}>
              <Ionicons name="heart-dislike-outline" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.headerWrapper, { backgroundColor: colors.background }]}>
        <View style={styles.headerOval}>
          <TouchableOpacity style={styles.iconLeft} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} />
          </TouchableOpacity>

          <Text style={[styles.headerTitle]}>{i18n.t('yourFavorites')}</Text>

          <TouchableOpacity style={styles.iconRight} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      {user && user._id ? (
        favorites.length > 0 ? (
          <FlatList
            data={favorites}
            renderItem={renderFavorite}
            keyExtractor={(item) => item._id || item.id || Math.random().toString()}
            contentContainerStyle={styles.list}
          />
        ) : (
          <Text style={[styles.emptyText, { color: colors.text }]}>{i18n.t('noFavorites')}</Text>
        )
      ) : (
        <Text style={[styles.emptyText, { color: colors.text }]}>
          {i18n.t('guestFavoritesMessage')}
        </Text>
      )}

      <View style={[styles.bottomNav, { backgroundColor: colors.card }]}>
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
};

export default Favorites;
