import { StyleSheet } from 'react-native';

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
    marginTop: 25,
  },
  headerOval: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 60,
    width: '103%',
  },

  // ⬇️ Overwriting the old headerTitle with new centered style
  headerTitle: {
    fontSize: 16,
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
    height: 320, // Increased size of the sofa view
    borderRadius: 25,
    overflow: 'hidden',
    marginVertical: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
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
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#bbb',
    marginTop: 20,
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
    borderColor: '#333',
    borderWidth: 1,
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
  },
});

export default styles;
