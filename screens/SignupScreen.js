import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from '../styles/SignupStyles';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSignup = async () => {
    try {
      // Log data being sent
      console.log('Data being sent:', {
        username,
        password,
        email,
        mobile
      });
  
      const response = await fetch('http://192.168.43.30:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
          mobile,
        }),
      });
  
      const data = await response.json();
      
      if (response.status === 200) {
        if (data.success) {
          Alert.alert('Success', 'Account created successfully');
          navigation.navigate('Home');
        } else {
          Alert.alert('Error', data.message || 'Something went wrong');
        }
      } else {
        Alert.alert('Error', 'Request failed with status code ' + response.status);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to connect to server');
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/top.png')} style={styles.topImage} />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.subtitle}>Create account</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="person-outline" size={18} style={styles.icon} />
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={18} style={styles.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="mail-outline" size={18} style={styles.icon} />
        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="call-outline" size={18} style={styles.icon} />
        <TextInput
          placeholder="Mobile"
          keyboardType="phone-pad"
          style={styles.input}
          value={mobile}
          onChangeText={setMobile}
        />
      </View>

      <TouchableOpacity onPress={handleSignup} style={styles.signInBtn}>
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
