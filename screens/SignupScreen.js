import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/SignupStyles';

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/top.png')} style={styles.topImage} />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />

      </View>

      <Text style={styles.subtitle}>Create account</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="person-outline" size={18} style={styles.icon} />
        <TextInput placeholder="Username" style={styles.input} />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={18} style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="mail-outline" size={18} style={styles.icon} />
        <TextInput placeholder="E-mail" keyboardType="email-address" style={styles.input} />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="call-outline" size={18} style={styles.icon} />
        <TextInput placeholder="Mobile" keyboardType="phone-pad" style={styles.input} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}style={styles.signInBtn}>
        <Text style={styles.signInText}>Create</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>
      <Image source={require('../assets/googleicon.jpg')} style={styles.googleIcon} />

        <Text style={styles.googleText}>Continue with Gmail</Text>
      </TouchableOpacity>

      <Image source={require('../assets/bottom.png')} style={styles.bottomImage} />
    </View>
  );
};

export default SignupScreen;
