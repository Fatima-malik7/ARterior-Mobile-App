import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import styles from '../styles/SofaARViewStyles';
import { useNavigation } from '@react-navigation/native';
import i18n from '../i18n/i18n';
import { ThemeContext } from '../context/ThemeContext'; // ✅ ThemeContext import

export default function SofaARView({ route }) {
  const navigation = useNavigation();
  const product = route?.params?.product || {};
  const [selectedColor, setSelectedColor] = useState(product.defaultColor || 'white');
  const { colors } = useContext(ThemeContext); // ✅ get theme colors

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={[styles.headerWrapper, ]}>
        <View style={[styles.headerOval]}>
          <TouchableOpacity style={{paddingLeft:18}}onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24}  />
          </TouchableOpacity>
          <Text style={[styles.headerTitle,]}>{i18n.t('view3D')}</Text>
          <TouchableOpacity style={{paddingRight:18}}onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sofa Info */}
      <View style={[styles.leatherSofaContainer,]}>
        <Text style={[styles.title, { color: colors.text }]}>{product.name}</Text>
        <View style={styles.stars}>
          {[...Array(4)].map((_, i) => (
            <AntDesign key={i} name="star" size={16} color="#FFD700" />
          ))}
          <AntDesign name="star" size={16} color="#ccc" />
        </View>
        <Text style={[styles.description, { color: colors.text }]}>
          {product.description || i18n.t('description')}
        </Text>
      </View>

      {/* 3D View or Image */}
      <View style={styles.sofaView}>
        <Image source={product.image} style={styles.sofaImage} />
      </View>

      {/* Color Selection */}
      <View style={styles.colors}>
        {['white', 'black', 'grey'].map((color) => (
          <TouchableOpacity
            key={color}
            onPress={() => setSelectedColor(color)}
            style={[
              styles.dot,
              {
                backgroundColor: color,
                borderWidth: selectedColor === color ? 2 : 0,
                borderColor: selectedColor === color ? '#000' : 'transparent',
              },
            ]}
          />
        ))}
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('Products')} style={[styles.tryBtn, { backgroundColor: '#2c5f46' }]}>
          <Text style={[styles.btnText]}>{i18n.t('tryAnother')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.doneBtn, { backgroundColor: '#2c5f46' }]}>
          <Text style={styles.btnText}>{i18n.t('done')}</Text>
        </TouchableOpacity>
      </View>

      {/* AR Pointer Image */}
      <View style={{ alignItems: 'flex-end', marginTop: -350, marginBottom: 10 }}>
        <Image
          source={require('../assets/True.png')}
          style={{ width: 250, height: 250, resizeMode: 'contain', marginRight: -50 }}
        />
      </View>
    </ScrollView>
  );
}
