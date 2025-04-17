// ProductDetails.js
import { NativeModules } from 'react-native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import styles from '../styles/ProductDetailsStyles';

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const [selectedColor, setSelectedColor] = useState(product.defaultColor || 'white');

  const tryInHome = () => {
    NativeModules.UnityLauncher.openUnity();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          <View style={styles.headerWrapper}>
            <View style={styles.headerOval}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Details</Text>
              <TouchableOpacity style={styles.headerButton}>
                <Feather name="more-vertical" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Product Image */}
      <View style={styles.productImageContainer}>
        <Image source={{ uri: product.imageUri }} style={styles.productImage} />
      </View>

      {/* AR Try Button */}
      <TouchableOpacity onPress={tryInHome} style={styles.arButton}>
        <Feather name="camera" size={18} color="black" />
        <Text style={styles.arButtonText}> Try in my home</Text>
      </TouchableOpacity>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <View style={styles.titleRow}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <TouchableOpacity>
            <AntDesign name="hearto" size={22} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Rating */}
        <View style={styles.ratingRow}>
          {[...Array(5)].map((_, index) => (
            <AntDesign key={index} name="star" size={18} color="#FFD700" />
          ))}
        </View>

        {/* Description */}
        <Text style={styles.description}>
          {product.description || 'No description available for this product.'}{' '}
          <Text style={{ color: 'blue' }}>Read more</Text>
        </Text>

        {/* Color Selection */}
        <View style={styles.colorOptions}>
          {(product.colors || ['white', 'black', 'gray']).map((color) => (
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

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Products')} style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
