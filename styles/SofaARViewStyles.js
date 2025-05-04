import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 50,
  },

  // 🔁 NEW WRAPPER FOR OVAL HEADER
 headerWrapper: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 30 : 25, // Adjust for iOS vs Android
  marginBottom: 10,
  },
  headerOval: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    paddingVertical: 15,
    width: width * 0.95, // Adjust to be responsive to screen width
    height: 70, // Set a fixed height for the oval header
    alignSelf: 'center',
    borderRadius: 60,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },

  // ⬇️ Overwriting the old headerTitle with new centered style
  headerTitle: {
    fontSize: width < 350 ? 16 : 18, // Adjust font size for smaller screens
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },

  // Leather Sofa Section
  leatherSofaContainer: {
    marginBottom: 25,
    marginTop: 20,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 6,
    marginBottom: 10,
  },
  description: {
    color: '#555',
    fontSize: 14,
    marginBottom: 10,
  },

  quantityText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
  },
  sofaView: {
    height: width < 350 ? 280 : 320, // Adjust sofa view size for smaller screens
    borderRadius: 25,
    overflow: 'hidden',
    marginVertical: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    marginTop: 5,
  },
  sofaImage: {
    width: '100%',
    height: '100%',
  },
  colors: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginHorizontal: 8,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#bbb',
  },
  
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
  },
  tryBtn: {
    backgroundColor: '#2E7D62',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  doneBtn: {
    backgroundColor: '#2E7D62',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  btnText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
