import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  topImage: {
    position: 'absolute',
    top: -20,
    left: -2,
    width: '100%',
    height: 140,
    resizeMode: 'contain',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 40,
    left: -150,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -100,
  },
  logo: {
    width: 350,
    height: 350,
    marginTop: -150,
    left: -50,
    resizeMode: 'contain',
  },
 
 
  subtitle: {
    marginTop: -50,
    fontSize: 16,
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 45,
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
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 10,
    color: '#aaa',
  },
  signInBtn: {
    flexDirection: 'row',
    backgroundColor: '#4B8F77',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 80,
    right: -55,
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  footer: {
    marginTop: 20,
    color: '#333',
  },
  link: {
    textDecorationLine: 'underline',
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
