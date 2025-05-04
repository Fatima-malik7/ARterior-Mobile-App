import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/SignupStyles';
import i18n from '../i18n/i18n';
import config from '../config';
const SignupScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);
  const { colors } = useContext(ThemeContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Added confirmation field
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Check password strength
  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const handleSignup = async () => {
  if (!username || !password || !confirmPassword || !email || !mobile) {
    Alert.alert(i18n.t('error'), i18n.t('fillAllFields'));
    return;
  }
  if (password !== confirmPassword) {
    Alert.alert(i18n.t('error'), i18n.t('passwordsDontMatch'));
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    Alert.alert(i18n.t('error'), i18n.t('invalidEmail'));
    return;
  }
  if (!/^(\+92|0)3[0-9]{9}$/.test(mobile)) {
    Alert.alert(i18n.t('error'), i18n.t('invalidPhone'));
    return;
  }
  
  try {
    const response = await fetch(`${config.BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email, mobile }),
    });
  
    const responseText = await response.text(); // Get raw response text
    console.log(responseText); // Log the raw response for debugging
  
    const data = JSON.parse(responseText); // Attempt to parse the response manually
  
    if (response.status === 200 && data.success) {
      const userData = data.user || data;
      setUser({
        _id: userData._id,
        username: userData.username,
        email: userData.email,
        mobile: userData.mobile,
      });
      Alert.alert(
        i18n.t('success'),
        i18n.t('accountCreated'),
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home'),
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(i18n.t('error'), data.message || i18n.t('somethingWentWrong'));
    }
  } catch (error) {
    console.error(error);
    Alert.alert(i18n.t('error'), i18n.t('connectionFailed'));
  }
  
};

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image source={require('../assets/top.png')} style={styles.topImage} />

      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={[styles.subtitle, { color: colors.text }]}>
        {i18n.t('createAccount')}
      </Text>

      {/* Username Input */}
      <View style={[styles.inputWrapper, { backgroundColor: colors.card }]}>
        <Ionicons name="person-outline" size={18} style={[styles.icon]} />
        <TextInput
          placeholder={i18n.t('enterUsername')}
          placeholderTextColor="#aaa"
          style={[styles.input, { color: colors.text }]}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Input */}
      <View style={[styles.inputWrapper, { backgroundColor: colors.card }]}>
        <Ionicons name="lock-closed-outline" size={18} style={[styles.icon]} />
        <TextInput
          placeholder={i18n.t('Password')}
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
          style={[styles.input, { color: colors.text }]}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            checkPasswordStrength(text);
          }}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={[styles.inputWrapper, { backgroundColor: colors.card }]}>
        <Ionicons name="lock-closed-outline" size={18} style={[styles.icon]} />
        <TextInput
          placeholder={i18n.t('confirmPassword')}
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
          style={[styles.input, { color: colors.text }]}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Email Input */}
      <View style={[styles.inputWrapper, { backgroundColor: colors.card }]}>
        <Ionicons name="mail-outline" size={18} style={[styles.icon]} />
        <TextInput
          placeholder={i18n.t('email')}
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          style={[styles.input, { color: colors.text }]}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Mobile Input */}
      <View style={[styles.inputWrapper, { backgroundColor: colors.card }]}>
        <Ionicons name="call-outline" size={18} style={[styles.icon]} />
        <TextInput
          placeholder={i18n.t('mobile')}
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
          style={[styles.input, { color: colors.text }]}
          value={mobile}
          onChangeText={setMobile}
        />
      </View>

      {/* Password Strength Indicator */}
      {password && (
        <Text style={{ color: passwordStrength < 3 ? 'red' : 'green' }}>
          {i18n.t('passwordStrength')}: {passwordStrength < 3 ? i18n.t('weak') : i18n.t('strong')}
        </Text>
      )}

      {/* Submit Button */}
      <TouchableOpacity onPress={handleSignup} style={styles.signInBtn}>
        <Text style={styles.signInText}>{i18n.t('create')}</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.googleBtn, { backgroundColor: colors.card }]}>
        <Image source={require('../assets/googleicon.jpg')} style={styles.googleIcon} />
        <Text style={[styles.googleText, { color: colors.text }]}>
          {i18n.t('continueWithGmail')}
        </Text>
      </TouchableOpacity>

      <Image source={require('../assets/bottom.png')} style={styles.bottomImage} />
    </View>
  );
};

export default SignupScreen;
