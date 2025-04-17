import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/LoginStyles';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Attempting login...');
  
      const response = await axios.post('http://192.168.43.30:5000/api/auth/login', {
        username: enteredUsername,
        password: enteredPassword,
      });
  
      console.log('Full response:', response);
      console.log('Response data:', response.data);
  
      if (response.data && response.data.success) {
        Alert.alert('Success', response.data.message || 'Login successful');
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', response.data.message || 'Invalid credentials');
      }
  
    } catch (error) {
      console.error('Login error:', error);
  
      if (error.response) {
        console.log('Error response:', error.response.data);
        Alert.alert('Error', 'Server responded with error: ' + error.response.status);
      } else if (error.request) {
        console.log('Error request:', error.request);
        Alert.alert('Error', 'No response from server');
      } else {
        console.log('Error message:', error.message);
        Alert.alert('Error', 'Error setting up request: ' + error.message);
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/top.png')} style={styles.topImage} />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.subtitle}>Sign in to your account</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="person-outline" size={18} style={styles.icon} />
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={enteredUsername}
          onChangeText={setEnteredUsername}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={18} style={styles.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={enteredPassword}
          onChangeText={setEnteredPassword}
        />
      </View>

      <Text style={styles.forgot}>Forgot your password?</Text>

      <TouchableOpacity onPress={handleLogin} style={styles.signInBtn}>
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
