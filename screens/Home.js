import React, { useContext, useState, useEffect, useRef } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/HomeStyles';
import i18n from '../i18n/i18n';
import { ThemeContext } from '../context/ThemeContext';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
// import { Video } from 'expo-video'; 
import { Video } from 'expo-av';


const { width } = Dimensions.get('window');

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
];

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { colors } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('Home');
  const sliderPosition = useSharedValue(0);

  const scrollRef = useRef(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const videoSources = [
    require('../assets/ARVideo2.mp4'),
    require('../assets/ARVideo.mp4'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (videoIndex + 1) % videoSources.length;
      scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      setVideoIndex(nextIndex);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [videoIndex]);

  useEffect(() => {
    if (route.name === 'Home') {
      sliderPosition.value = withTiming(0, { duration: 300, easing: Easing.ease });
      setActiveTab('Home');
    } else if (route.name === 'Favorites') {
      sliderPosition.value = withTiming(1, { duration: 300, easing: Easing.ease });
      setActiveTab('Favorites');
    } else if (route.name === 'Camera') {
      sliderPosition.value = withTiming(2, { duration: 300, easing: Easing.ease });
      setActiveTab('Camera');
    } else if (route.name === 'Products') {
      sliderPosition.value = withTiming(3, { duration: 300, easing: Easing.ease });
      setActiveTab('Products');
    } else if (route.name === 'Profile') {
      sliderPosition.value = withTiming(4, { duration: 300, easing: Easing.ease });
      setActiveTab('Profile');
    }
  }, [route.name]);

  const renderCategory = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Products')} style={styles.banner}>
      <Image source={item.image} style={styles.bannerImage} />
      <View style={styles.textOverlay}>
        <Text style={[styles.bannerTitle, { color: '#fff' }]}>{i18n.t(item.title)}</Text>
        {item.subtitle ? (
          <Text style={[styles.bannerSubtitle, { color: '#fff', fontWeight: 'bold' }]}>{i18n.t(item.subtitle)}</Text>
        ) : null}
      </View>
      <Image source={item.image2} style={styles.bannerImage2} />
      <View style={styles.textOverlay2}>
        <Text style={[styles.bannerTitle2, { color: '#fff' }]}>{i18n.t(item.title)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: colors.text }]}>{i18n.t('Category')}</Text>
      </View>

      {/* Auto-Sliding AR Demo Videos */}
      <View style={styles.videoContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          ref={scrollRef}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
        >
          {videoSources.map((source, index) => (
            <Video
              key={index}
              source={source}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              useNativeControls
              style={{ width, height: 200, borderRadius: 10 }}
            />
          ))}
        </ScrollView>
      </View>

      {/* Category List */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.bannerList}
      />

      {/* Bottom Navigation */}
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
};

export default Home;
