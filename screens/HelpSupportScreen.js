import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import i18n from '../i18n/i18n';
import ProfileStyles from '../styles/ProfileStyles';

const HelpSupportScreen = () => {
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
        {i18n.t('helpSupportTitle')}
      </Text>
      <Text style={[ProfileStyles.contact, { color: colors.text }]}>
        {i18n.t('helpSupportSubtitle')}
      </Text>

      <View style={[ProfileStyles.section, { backgroundColor: colors.card }]}>
        <View style={ProfileStyles.item}>
          <Ionicons name="mail-outline" size={22} color={colors.text} />
          <Text style={[ProfileStyles.label, { color: colors.text }]}>contact@arterior.com</Text>
        </View>
        <View style={ProfileStyles.item}>
          <Ionicons name="call-outline" size={22} color={colors.text} />
          <Text style={[ProfileStyles.label, { color: colors.text }]}>+92 331 6937174</Text>
        </View>
      </View>

      {/* FAQs */}
      <View style={[ProfileStyles.section, { backgroundColor: colors.card }]}>
        <Text style={[ProfileStyles.label, { fontWeight: 'bold', color: colors.text }]}>
          {i18n.t('faq1q')}
        </Text>
        <Text style={[ProfileStyles.label, { color: colors.text }]}>
          {i18n.t('faq1a')}
        </Text>
      </View>

      {/* About Us */}
      <View style={[ProfileStyles.section, { backgroundColor: colors.card }]}>
        <Text style={[ProfileStyles.label, { fontWeight: 'bold', color: colors.text }]}>
          {i18n.t('aboutUs')}
        </Text>
        <Text style={[ProfileStyles.label, { color: colors.text }]}>
          {i18n.t('aboutUsContent')}
        </Text>
      </View>

      {/* Contact Us Button */}
      <TouchableOpacity
        style={ProfileStyles.logoutButton}
        onPress={() => navigation.navigate('ContactUs')}
      >
        <Text style={ProfileStyles.logoutText}>{i18n.t('contactUs')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HelpSupportScreen;
