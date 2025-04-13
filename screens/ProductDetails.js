import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import styles from '../styles/ProductDetailsStyles';// Import the styles from the new file

export default function ProductDetails({ navigation }) {
  const [selectedColor, setSelectedColor] = useState('white');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          <View style={styles.headerWrapper }>
            <View style={styles.headerOval}>
          {/* Back Arrow, Details and 3 Dots in one container with rounded edges */}
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
      {/* Product Image Container with Rounded Edges */}
      <View style={styles.productImageContainer}>
        <Image source={require('../assets/WhiteThreeSeaterSofa.jpg')} style={styles.productImage} />
      </View>

      {/* Try AR Button */}
      <TouchableOpacity onPress={() => navigation.navigate('SofaARView')}style={styles.arButton}>
        <Feather name="camera" size={18} color="black" />
        <Text style={styles.arButtonText}> Try in my home</Text>
      </TouchableOpacity>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <View style={styles.titleRow}>
          <Text style={styles.productTitle}>Leather Sofa</Text>
          <TouchableOpacity>
            <AntDesign name="hearto" size={22} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Star Rating */}
        <View style={styles.ratingRow}>
          {[...Array(5)].map((_, index) => (
            <AntDesign key={index} name="star" size={18} color="#FFD700" />
          ))}
        </View>

        {/* Product Description */}
        <Text style={styles.description}>
          Enhance your living space with this sleek, vibrant 3-seater leather sofa...{' '}
          <Text style={{ color: 'blue' }}>Read more</Text>
        </Text>

        {/* Color Options */}
        <View style={styles.colorOptions}>
          {['white', 'black', 'grey'].map((color) => (
            <TouchableOpacity
              key={color}
              style={[styles.colorDot, { backgroundColor: color, borderWidth: selectedColor === color ? 2 : 0 }]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Products')}style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}
