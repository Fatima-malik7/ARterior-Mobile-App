import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';
import styles from '../styles/ProfileStyles';
import i18n from '../i18n/i18n';
import config from '../config';
const ResetPasswordScreen = () => {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert(i18n.t('error'), i18n.t('passwordMismatch'));
      return;
    }

    try {
      const response = await fetch(`${config.BASE_URL}/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert(i18n.t('success'), data.message || i18n.t('passwordResetSuccess'));
        navigation.navigate('Login');
      } else {
        Alert.alert(i18n.t('error'), data.message || i18n.t('passwordResetFail'));
      }
    } catch (error) {
      console.error('Reset password error:', error);
      Alert.alert(i18n.t('error'), i18n.t('passwordResetFail'));
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <Text style={[styles.name, { color: colors.text }]}>
          {user?.username || i18n.t('guestUser')}
        </Text>
        <Text style={[styles.contact, { color: colors.text }]}>
          {user?.email || '-'}
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>

        {/* Reset Token */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder={i18n.t('enterResetToken')}
            placeholderTextColor="#888"
            value={token}
            onChangeText={setToken}
            autoCapitalize="none"
            style={[styles.inputField, { color: colors.text }]}
          />
        </View>

        {/* New Password */}
<View style={styles.inputWrapper}>
  <TextInput
    placeholder={i18n.t('enterNewPassword')}
    placeholderTextColor="#888"
    value={newPassword}
    onChangeText={setNewPassword}
    secureTextEntry={!newPasswordVisible}
    style={[styles.inputField, { color: colors.text }]}
  />
  <TouchableOpacity
    style={styles.eyeIcon}
    onPress={() => setNewPasswordVisible(!newPasswordVisible)}
  >
    <Ionicons
      name={newPasswordVisible ? 'eye-off' : 'eye'}
      size={20}
      color="#888"
    />
  </TouchableOpacity>
</View>

{/* Confirm Password */}
<View style={styles.inputWrapper}>
  <TextInput
    placeholder={i18n.t('confirmNewPassword')}
    placeholderTextColor="#888"
    value={confirmPassword}
    onChangeText={setConfirmPassword}
    secureTextEntry={!confirmPasswordVisible}
    style={[styles.inputField, { color: colors.text }]}
  />
  <TouchableOpacity
    style={styles.eyeIcon}
    onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
  >
    <Ionicons
      name={confirmPasswordVisible ? 'eye-off' : 'eye'}
      size={20}
      color="#888"
    />
  </TouchableOpacity>
</View>

      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleResetPassword}>
        <Text style={styles.logoutText}>
          <Ionicons name="lock-closed-outline" size={20} color="white" /> {i18n.t('resetPassword')}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResetPasswordScreen;
