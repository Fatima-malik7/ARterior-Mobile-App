import React, { useContext, useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/ProfileStyles';
import * as ImagePicker from 'expo-image-picker';
import i18n from '../i18n/i18n'; // 👈 Import your i18n instance
import config from '../config';
const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();
  const { isDarkTheme, colors } = useContext(ThemeContext);
  const [profileImage, setProfileImage] = useState(user?.profileImage || null);
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [mobile, setMobile] = useState(user?.mobile || '');

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

  const handleSave = async () => {
    try {
      const updatedUser = {
        username,
        email,
        mobile,
        profileImage, // ✅ Add profileImage here
      };
  
      const response = await fetch(`${config.BASE_URL}/api/auth/updateUser/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser),
      });
  
      if (!response.ok) {
        const text = await response.text();
        console.error('Response Error:', text);
        throw new Error(i18n.t('profileUpdateFail'));
      }
  
      const result = await response.json();
      setUser({ ...user, username, email, mobile, profileImage }); // ✅ Update context
  
      Alert.alert(i18n.t('success'), i18n.t('profileUpdated'));
    } catch (error) {
      console.error('Error:', error);
      Alert.alert(i18n.t('error'), error.message || i18n.t('profileUpdateFail'));
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
        <Image
          source={profileImage ? { uri: profileImage } : require('../assets/avatar.jpeg')}
          style={styles.avatar}
        />
        <TouchableOpacity onPress={handleProfilePictureUpload} style={styles.editIcon}>
          <MaterialIcons name="edit" size={18} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.name, { color: colors.text }]}>{user?.username || i18n.t('guestUser')}</Text>
        <Text style={[styles.contact, { color: colors.text }]}>
          {user?.email || '-'} | {user?.mobile || '-'}
        </Text>
      </View>

     <View style={[styles.section, {backgroundColor: colors.card}]}>
        <Text style={[styles.label2, { color: colors.text }]}>{i18n.t('username')}</Text>
        <TextInput
          style={[styles.input2, { borderColor: colors.border, color: colors.text }]}
          placeholder={i18n.t('enterUsername')}
          placeholderTextColor='#888'
          value={username}
          onChangeText={setUsername}
        />

        <Text style={[styles.label2, { color: colors.text }]}>{i18n.t('email')}</Text>
        <TextInput
          style={[styles.input2, { borderColor: colors.border, color: colors.text }]}
          placeholder={i18n.t('enterEmail')}
          placeholderTextColor='#888'
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={[styles.label2, { color: colors.text }]}>{i18n.t('mobile')}</Text>
        <TextInput
          style={[styles.input2, { borderColor: colors.border, color: colors.text }]}
          placeholder={i18n.t('enterMobile')}
          placeholderTextColor='#888'
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />
    </View>
      <TouchableOpacity onPress={handleSave} style={styles.logoutButton}>
        <Text style={styles.logoutText}>{i18n.t('saveChanges')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfile;
