import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: statusBarHeight + 10,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -110,
  },
  logo: {
    width: 350,
    height: 350,
    marginTop: 60,
    left: -50,
    resizeMode: 'contain',
  },
  chair: {
    width: '100%', // Fill entire width of screen
    height: '50%', // Good height that avoids overlap
    resizeMode: 'cover', // Full visual experience
    marginTop: -70,
    left: 20,
  },
  buttonAccount: {
    flexDirection: 'row',
    backgroundColor: '#2E7D62',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: -40,
    alignItems: 'center',
  },
  buttonStarted: {
    flexDirection: 'row',
    backgroundColor: '#2E7D62',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 10,
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
  }
});

export default styles;
