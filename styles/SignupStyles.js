import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  topImage: {
    position: 'absolute',
    top: -20,
    left: -2,
    width: width, // Use screen width to make it responsive
    height: 140,
    resizeMode: 'contain',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 40,
    left: -150,
    width: width, // Use screen width to make it responsive
    height: 300,
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? -110 : -100, // Adjust margin for better alignment across platforms
  },
  logo: {
    width: width * 0.8, // Set width to 80% of screen width to ensure responsiveness
    height: width * 0.8, // Keep aspect ratio based on width
    marginTop: 60,
    left: -50,
    resizeMode: 'contain',
  },
  subtitle: {
    marginTop: -70,
    fontSize: 18,
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 30,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    color: '#aaa',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  signInBtn: {
    flexDirection: 'row',
    backgroundColor: '#4B8F77',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 30,
    right: Platform.OS === 'ios' ? -55 : -45, // Adjust button position for platform-specific alignment
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    color: '#444',
  },
});
