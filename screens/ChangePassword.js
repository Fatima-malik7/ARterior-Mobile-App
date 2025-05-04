import React, { useState, useContext } from 'react';
import {
  View, TextInput, Image, Text, Alert, TouchableOpacity, ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/ProfileStyles';
import i18n from '../i18n/i18n'; // ✅ Import i18n
import config from '../config';
const ChangePassword = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const { colors } = useContext(ThemeContext);

  const [profileImage, setProfileImage] = useState(user?.profileImage || null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleProfilePictureUpload = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(i18n.t('permissionRequired'), i18n.t('mediaAccessNeeded'));
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setProfileImage(pickerResult.assets[0].uri);
    }
  };

  const handlePasswordChange = async () => {
    if (!newPassword || newPassword.length < 6) {
      Alert.alert(i18n.t('error'), i18n.t('passwordLengthError'));
      return;
    }

    try {
      const response = await fetch(`${config.BASE_URL}/api/auth/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user?.email,
          currentPassword,
          newPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert(i18n.t('success'), i18n.t('passwordChangeSuccess'));
        setCurrentPassword('');
        setNewPassword('');
      } else {
        Alert.alert(i18n.t('error'), result.message || i18n.t('passwordChangeError'));
      }
    } catch (error) {
      Alert.alert(i18n.t('error'), i18n.t('passwordChangeError'));
      console.error(error);
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color={colors.text}  />
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={profileImage ? { uri: profileImage } : require('../assets/avatar.jpeg')}
          style={styles.avatar}
        />
        <TouchableOpacity onPress={handleProfilePictureUpload} style={styles.editIcon}>
          <MaterialIcons name="edit" size={18}  />
        </TouchableOpacity>
        <Text style={[styles.name, {color:colors.text}]}>{user?.username || i18n.t('guestUser')} </Text>
        <Text style={[styles.contact, {color:colors.text}]}>
          {user?.email || '-'} | {user?.mobile || '-'}
        </Text>
      </View>

      <View style={[styles.section, {backgroundColor: colors.card}]}>
        <View style={[styles.inputWrapper, { flexDirection: 'row', alignItems: 'center' }]}>
  <TextInput
    placeholder={i18n.t('currentPassword')}
    placeholderTextColor='#888'
    secureTextEntry={!passwordVisible}
    value={currentPassword}
    onChangeText={setCurrentPassword}
    style={[styles.inputField, { flex: 1, color: colors.text }]}
  />
</View>

        
        <View style={[styles.inputWrapper, { flexDirection: 'row', alignItems: 'center' }]}>
  <TextInput
    placeholder={i18n.t('newPassword')}
    placeholderTextColor='#888'
    secureTextEntry={!passwordVisible}
    value={newPassword}
    onChangeText={setNewPassword}
    style={[styles.inputField, { flex: 1, color: colors.text }]}
  />
  <TouchableOpacity
    onPress={() => setPasswordVisible(!passwordVisible)}
    style={{ position: 'absolute', right: 20,paddingBottom: 10 }} // Position the icon inside the TextInput
  >
    <Ionicons
      name={passwordVisible ? 'eye-off' : 'eye'}
      size={20}
      color={colors.text}
    />
  </TouchableOpacity>
</View>

      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handlePasswordChange}>
        <Text style={styles.logoutText}>{i18n.t('changePassword')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ChangePassword;
