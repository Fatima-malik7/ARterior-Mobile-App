import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // Spacing for 2 cards + margins

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingTop: Platform.OS === 'ios' ? 50 : 30, // Adjust top padding for iOS and Android
    paddingHorizontal: 16,
  },

  headerText: {
    fontSize: width < 350 ? 22 : 26, // Adjust for smaller screen sizes
    fontWeight: '700',
    color: '#000',
    marginBottom: 15,
    marginLeft: 8,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
    height: 60,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },

  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  productContainer: {
    width: cardWidth,
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    height: 200,
    marginBottom: 19,
    marginHorizontal: 4, // Horizontal spacing between columns
  },

  image: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
    alignContent: 'center',
    padding: 8, // Gives space around the image
  },

  imageContainer: {
    width: '100%',
    height: 100,
    borderRadius: 400,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Gives space around the image
  },

  productInfo: {
    padding: 10,
  },

  name: {
    fontSize: width < 350 ? 14 : 16, // Adjust for smaller screens
    textAlign: 'left',
    fontWeight: '600',
    color: '#222',
    marginBottom: 10,
    marginTop: 10,
  },

  price: {
    fontSize: 13,
    fontWeight: '500',
    color: '#666',
  },

  rating: {
    fontSize: 12,
    color: '#f5a623',
    marginTop: 4,
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  cameraButton: {
    backgroundColor: '#2c5f46',
    padding: 12,
    borderRadius: 50,
    marginTop: -60,
  },

  slider: {
    position: 'absolute',
    bottom: 19,
    left: width * 0.69, // Adjust the position of the slider dynamically based on screen width
    height: 3,
    width: 30,
    backgroundColor: '#2c5f46',
    borderRadius: 1.5,
  },
});

export default styles;
