import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingBottom: 16,
  },

  // 🟢 Sofa-style Header (Oval)
  headerWrapper: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 45 : 35, // Adjust for iOS vs Android
    marginBottom: 25,
  },
  headerOval: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    paddingVertical: 15,
    width: width * 0.95, // Adjust to be responsive to screen width
    height: 70,
    alignSelf: 'center',
    borderRadius: 60,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  headerTitle: {
    fontSize: width < 350 ? 16 : 18, // Adjust font size for smaller screens
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  // 📦 Favorites List
  list: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 100,
    marginRight: 20,
    marginTop: 50,
    resizeMode: 'center',
  },
  productImageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  arButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: -30,
    marginBottom: 20,
    position: 'absolute',
  },
  imageContainer: {
    width: '30%',
    height: 40,
    borderRadius: 400,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Gives space around the image
  },

  info: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
    textAlign: 'left',
  },
  
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 1,
  },
  removeBtn: {
    padding: 5,
  },

  // 🕳 Empty Text
  emptyText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 50,
  },
  iconLeft: {
    position: 'absolute',
    left: 20,
  },
  
  iconRight: {
    position: 'absolute',
    right: 20,
  },
  
  unsaveBtn: {
    padding: 4,
    marginTop: 2,
    marginLeft: 180,
    
  },  

  // Bottom navigation
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
    left: 32,
    height: 3,
    width: 30,
    backgroundColor: '#2c5f46',
    borderRadius: 1.5,
  },
});
