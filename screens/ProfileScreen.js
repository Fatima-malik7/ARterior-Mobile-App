import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Feather  } from '@expo/vector-icons';
import styles from '../styles/ProfileStyles';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack('Login')}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/avatar.jpeg')}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editIcon}>
          <MaterialIcons name="edit" size={18} color="#000" />
        </TouchableOpacity>
        <Text style={styles.name}>Fatima Malik</Text>
        <Text style={styles.contact}>fatima1@gmail.com | +92 311 62852983</Text>
      </View>

      <View style={styles.section}>
        <ProfileItem icon="person-outline" label="Edit profile information" />
        <ProfileItem icon="notifications-outline" label="Notifications" value="ON" />
        <ProfileItem icon="language-outline" label="Language" value="English" />
      </View>

      <View style={styles.section}>
        <ProfileItem icon="lock-closed-outline" label="Security" />
        <ProfileItem icon="color-palette-outline" label="Theme" value="Light mode" />
      </View>

      <View style={styles.section}>
        <ProfileItem icon="help-circle-outline" label="Help & Support" />
        <ProfileItem icon="chatbox-ellipses-outline" label="Contact us" />
        <ProfileItem icon="document-text-outline" label="Privacy policy" />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Startup')}style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
        <Ionicons name="arrow-forward" size={18} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <View style={styles.item}>
    <Ionicons name={icon} size={20} color="#000" />
    <Text style={styles.label}>{label}</Text>
    {value && <Text style={styles.value}>{value}</Text>}
  </View>
);

export default ProfileScreen;
