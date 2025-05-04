import React, { useState, useContext } from 'react';
import { View, TextInput, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext'; // optional if you need it later
import styles from '../styles/ProfileStyles'; // ✅ Same styles as ChangePassword
import i18n from '../i18n/i18n'; // ✅ Language support
import config from '../config';
const ForgotPasswordScreen = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  const handlePasswordReset = async () => {
    if (!enteredEmail) {
      Alert.alert(i18n.t('error'), i18n.t('enterEmail'));
      return;
    }

    try {
      const response = await fetch(`${config.BASE_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: enteredEmail }),
      });

      const responseText = await response.text();
      console.log('Response Text:', responseText);

      if (responseText.includes('<html>')) {
        Alert.alert(i18n.t('serverError'), i18n.t('unexpectedServerResponse'));
        return;
      }

      const data = JSON.parse(responseText);

      if (response.ok) {
        Alert.alert(i18n.t('success'), data.message || i18n.t('resetTokenSent'));
        navigation.navigate('ResetPassword');
      } else {
        Alert.alert(i18n.t('error'), data.message || i18n.t('failedToSendResetToken'));
      }
    } catch (error) {
      console.error('Password reset error:', error);
      Alert.alert(i18n.t('error'), i18n.t('failedToSendResetToken'));
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
        <Ionicons name="lock-closed-outline" size={80} color={colors.text} />
        <Text style={[styles.name, { color: colors.text }]}>{i18n.t('forgotPassword')}</Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <TextInput
          placeholder={i18n.t('enterYourEmail')}
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={enteredEmail}
          onChangeText={setEnteredEmail}
          style={[styles.input, { color: colors.text }]}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handlePasswordReset}>
        <Text style={styles.logoutText}>
          {i18n.t('sendResetToken')}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
