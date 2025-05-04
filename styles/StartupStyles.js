import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: statusBarHeight + 8,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? -110 : -100, // Slight adjustment for iOS and Android
  },
  logo: {
    width: width * 0.9, // 70% of the screen width
    height: height * 0.35, // 35% of the screen height
    marginTop: 60,
    left: -50,
    resizeMode: 'contain',
  },
  chair: {
    width: '100%',
    height: height * 0.5, // 50% of the screen height
    resizeMode: 'cover',
    marginTop: -70,
    left: 20,
  },
  buttonAccount: {
    flexDirection: 'row',
    backgroundColor: '#2E7D62',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 10 : 10,
    alignItems: 'center',
  },
  buttonStarted: {
    flexDirection: 'row',
    backgroundColor: '#2E7D62',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop:  Platform.OS === 'ios' ? 20 : 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 28,
    color: '#fff',
    marginRight: 50,
  },
  buttonTextS: {
    fontSize: 28,
    color: '#fff',
    marginRight: 110,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
