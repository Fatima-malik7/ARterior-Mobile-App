import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/StartupStyles'; // Adjust the path as necessary 
const Startup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <View style={styles.logoContainer}>
      {/* Logo Image */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Sofa Chair Image */}
      <Image source={require('../assets/StartupSofa.jpg')} style={styles.chair} />
      </View>
      {/* Buttons */}
      <TouchableOpacity style={styles.buttonAccount} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Create Account</Text>
        <Ionicons name="arrow-forward-circle" size={30} color="#fff"  />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStarted} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonTextS}>Get Started</Text>
        <Ionicons name="arrow-forward-circle" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Startup;
