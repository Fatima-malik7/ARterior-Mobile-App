import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import styles from '../styles/SofaARViewStyles'; // Adjust the path as necessary
import { useNavigation } from '@react-navigation/native';   

export default function SofaARView() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.headerOval}>
        <TouchableOpacity onPress={() => navigation.goBack('ProductDetails')}>
  <Ionicons name="arrow-back" size={20} color="black" />
</TouchableOpacity>
<Text style={styles.headerTitle}>3D View</Text>

<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
  <Ionicons name="person-outline" size={20} color="black" />
</TouchableOpacity>
        </View>
      </View>

      {/* Leather Sofa Container (Title, Description, and Stars) */}
      <View style={styles.leatherSofaContainer}>
        <Text style={styles.title}>Leather Sofa</Text>
        <View style={styles.stars}>
          {[...Array(4)].map((_, i) => (
            <AntDesign key={i} name="star" size={16} color="#FFD700" />
          ))}
          <AntDesign name="star" size={16} color="#ccc" />
        </View>
        <Text style={styles.description}>
          Enhance your living space with this sleek, vibrant 3-seater leather sofa. Its sophisticated design combines comfort and style to bring a modern touch to any room.
        </Text>
      </View>

      {/* 3D View */}
      <View style={styles.sofaView}>
        <Image
          source={require('../assets/ARicon.jpg')}
          style={styles.sofaImage}
          resizeMode="contain"
        />
      </View>

      {/* Color Dots */}
      <View style={styles.colors}>
        <View style={[styles.dot, { backgroundColor: 'grey' }]} />
        <View style={[styles.dot, { backgroundColor: 'white' }]} />
        <View style={[styles.dot, { backgroundColor: 'black' }]} />
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('Products')} style={styles.tryBtn}>
          <Text style={styles.btnText}>Try Another</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}style={styles.doneBtn}>
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
