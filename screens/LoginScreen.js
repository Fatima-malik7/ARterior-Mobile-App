import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/LoginStyles';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/top.png')} style={styles.topImage} />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      
      </View>

      <Text style={styles.subtitle}>Sign in to your account</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="person-outline" size={18} style={styles.icon} />
        <TextInput placeholder="Username" style={styles.input} />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={18} style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>

      <Text style={styles.forgot}>Forgot  your password?</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}style={styles.signInBtn}>
        <Text style={styles.signInText}>Sign in</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.footer}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
          Create
        </Text>
      </Text>

      <Image source={require('../assets/bottom.png')} style={styles.bottomImage} />
    </View>
  );
};

export default LoginScreen;
