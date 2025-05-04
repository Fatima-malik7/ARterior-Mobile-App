import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 50 : 40, // Adjust padding for iOS and Android
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 2,
    right: 0,
    paddingHorizontal: 6,
  },
  headerButton: {
    padding: 8,
    paddingLeft: 18,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: width < 350 ? 18 : 20, // Adjust font size for smaller screens
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginLeft: 0,
    
  },
  headerWrapper: {
    alignItems: 'center',
    // marginTop: Platform.OS === 'ios' ? 40 : 35, // Adjust for iOS vs Android
    marginBottom: 25,
  },
  headerOval: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    paddingVertical: 15,
    width: width * 0.95, // Adjust to be responsive to screen width
    alignSelf: 'center',
    borderRadius: 60,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  productImageContainer: {
    width: '95%',
    height: 250,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 70,
    marginLeft: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 3 },
  },
  productImage: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover', // Ensure the image fills the container
    marginTop: 10,
    borderRadius: 15,
  },
  arButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 15,
    margin: 10,
    alignSelf: 'center',
  },
  arButtonText: {
    flexDirection: 'row',
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  productInfo: {
    padding: 15,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    marginVertical: 5,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  colorOptions: {
    flexDirection: 'row',
    marginVertical: 5,
    marginTop: 15,
  },
  colorDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  buyNowButton: {
    backgroundColor: '#2E7D62',
    flex: 1,
    padding: 12,
    borderRadius: 15,
    marginRight: 5,
    alignItems: 'center',
    marginTop: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
