import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/HomeStyles'; // Adjust the path as necessary
import { useNavigation } from '@react-navigation/native';
const categories = [
  {
    title: 'Sale',
    subtitle: 'Get 40% Extra Off',
    image: require('../assets/SaleCard.jpg'),
  },
  {
    title: 'Living',
    subtitle: '',
    image2: require('../assets/LivingRoom.jpg'),
  },
  // Add more if needed
];

const Home = () => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Products')}style={styles.banner}>
      <Image source={item.image} style={styles.bannerImage} />
      <View style={styles.textOverlay}>
        <Text style={styles.bannerTitle}>{item.title}</Text>
        {item.subtitle ? <Text style={styles.bannerSubtitle}>{item.subtitle}</Text> : null}
      </View>
      onPress={() => navigation.navigate('Products')}<Image source={item.image2} style={styles.bannerImage2} />
      <View style={styles.textOverlay2}>
        <Text style={styles.bannerTitle2}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Category</Text>
        {/* <View style={styles.cartIcon}>
          <Ionicons name="cart-outline" size={30} color="black" />
          <View style={styles.cartBadge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View> */}
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.bannerList}
      />

      {/* Bottom Navigation */}
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
};

export default Home;
