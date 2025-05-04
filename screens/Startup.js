import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/StartupStyles';
import i18n from '../i18n/i18n';

const Startup = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/* Logo Image */}
          <Image source={require('../assets/logo.png')} style={styles.logo} />

          {/* Sofa Chair Image */}
          <Image source={require('../assets/StartupSofa.jpg')} style={styles.chair} />
        </View>

        {/* Create Account Button */}
        <TouchableOpacity style={styles.buttonAccount} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>{i18n.t('createAccount')}</Text>
          <Ionicons name="arrow-forward-circle" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Get Started Button */}
        <TouchableOpacity style={styles.buttonStarted} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonTextS}>{i18n.t('getStarted')}</Text>
          <Ionicons name="arrow-forward-circle" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Startup;
