import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import i18n from '../i18n/i18n';
import ProfileStyles from '../styles/ProfileStyles';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  return (
    <ScrollView style={[ProfileStyles.container, { backgroundColor: colors.background }]}>
      {/* Header Section */}
      <View style={ProfileStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Privacy Policy Title */}
      <Text style={[ProfileStyles.name, { color: colors.text, textAlign: 'center' }]}>
        {i18n.t('privacyPolicyTitle')}
      </Text>

      {/* Privacy Policy Content */}
      <View style={[ProfileStyles.section, { backgroundColor: colors.card }]}>
        <Text style={[ProfileStyles.label, { fontWeight: 'bold', color: colors.text }]}>
          {i18n.t('privacyPolicySectionTitle')}
        </Text>
        <Text style={[ProfileStyles.text, { color: colors.text }]}>
          {i18n.t('privacyPolicyContent')}
        </Text>
      </View>

      <View style={[ProfileStyles.section, { backgroundColor: colors.card }]}>
        <Text style={[ProfileStyles.label, { fontWeight: 'bold', color: colors.text }]}>
          {i18n.t('privacyPolicySection2Title')}
        </Text>
        <Text style={[ProfileStyles.text, { color: colors.text }]}>
          {i18n.t('privacyPolicySection2Content')}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicyScreen;
