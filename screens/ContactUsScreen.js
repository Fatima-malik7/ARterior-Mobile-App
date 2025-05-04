import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import i18n from '../i18n/i18n';
import ProfileStyles from '../styles/ProfileStyles';

const ContactUsScreen = () => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  return (
    <ScrollView style={[ProfileStyles.container, { backgroundColor: colors.background }]}>
      <View style={ProfileStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={ProfileStyles.avatarContainer}>
        <Image source={require('../assets/avatar.jpeg')} style={ProfileStyles.avatar} />
      </View>

      <Text style={[ProfileStyles.name, { color: colors.text, textAlign: 'center' }]}>
        {i18n.t('contactUsTitle')}
      </Text>
      <Text style={[ProfileStyles.contact, { color: colors.text }]}>
        {i18n.t('contactUsSubtitle')}
      </Text>

      <View style={[ProfileStyles.section, { backgroundColor: colors.card }]}>
        <View style={ProfileStyles.item}>
          <Ionicons name="location-outline" size={22} color={colors.text} />
          <Text style={[ProfileStyles.label, { color: colors.text }]}>
            Block D Gulber Greens, Islamabad, Pakistan
          </Text>
        </View>
        <View style={ProfileStyles.item}>
          <Ionicons name="mail-outline" size={22} color={colors.text} />
          <Text style={[ProfileStyles.label, { color: colors.text }]}>
            contact@arterior.com
          </Text>
        </View>
        <View style={ProfileStyles.item}>
          <Ionicons name="call-outline" size={22} color={colors.text} />
          <Text style={[ProfileStyles.label, { color: colors.text }]}>
            +92 331 6937174
          </Text>
        </View>
      </View>

      <View style={[ProfileStyles.section, { backgroundColor: colors.card }]}>
        <Text style={[ProfileStyles.label, { fontWeight: 'bold', color: colors.text }]}>
          {i18n.t('businessHours')}
        </Text>
        <Text style={[ProfileStyles.contact, { textAlign: 'center', color: colors.text }]}>
          Monday - Friday: 9:00 AM - 6:00 PM{'\n'}
          Saturday: 10:00 AM - 4:00 PM{'\n'}
          Sunday: Closed
        </Text>
      </View>

      <View style={[ProfileStyles.section, { backgroundColor: colors.card }]}>
        <Text style={[ProfileStyles.label, { fontWeight: 'bold', color: colors.text }]}>
          {i18n.t('followUs')}
        </Text>
        <View style={ProfileStyles.item}>
          <Ionicons name="logo-instagram" size={22} color={colors.text} />
          <Text style={[ProfileStyles.label, { color: colors.text }]}>@arterior.official</Text>
        </View>
        <View style={ProfileStyles.item}>
          <Ionicons name="logo-facebook" size={22} color={colors.text} />
          <Text style={[ProfileStyles.label, { color: colors.text }]}>facebook.com/arterior</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactUsScreen;
