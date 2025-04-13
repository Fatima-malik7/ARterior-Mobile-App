import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    paddingTop: 50, // Padding to push content down a bit
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 15, 
    paddingVertical: 10,
  },
  headerIconContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%',
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  headerButton: {
    padding: 10,
    borderRadius: 50, // Make the container round
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    flex: 1,
  },
  headerWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerOval: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 60,
    width: '103%',
    marginLeft: 8, // Adjust to center the oval
  },
  productImageContainer: {
    width: '100%',
    height: 250,
    borderRadius: 20, // Rounded corners for the image container
    overflow: 'hidden', // Ensures the image doesn't spill out of the rounded corners
    marginTop: 70, // Some space from the header
  },
  productImage: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain',
  marginTop: 40, // Space between image and AR button
    borderRadius: 15, // Rounded corners for the image
  },
  arButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0', 
    padding: 10, 
    borderRadius: 15, 
    margin: 10, 
    alignSelf: 'center' 
  },
  arButtonText: { 
    marginLeft: 5, 
    fontSize: 14, 
    fontWeight: 'bold' 
  },
  productInfo: { 
    padding: 15 
  },
  titleRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  productTitle: { 
    fontSize: 22, 
    fontWeight: 'bold' 
  },
  ratingRow: { 
    flexDirection: 'row', 
    marginVertical: 5, 
    marginTop: 10,
  },
  description: { 
    fontSize: 14, 
    color: '#555', 
    marginTop: 10 
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
    marginTop: 20 
  },
  buyNowButton: { 
    backgroundColor: '#0D8050', 
    flex: 1, 
    padding: 12, 
    borderRadius: 15, 
    marginRight: 5, 
    alignItems: 'center', 
    marginTop: 100  },
  // addToCartButton: { 
  //   backgroundColor: '#2E7D32', 
  //   flex: 1, 
  //   padding: 12, 
  //   borderRadius: 5, 
  //   marginLeft: 5, 
  //   alignItems: 'center' 
  // },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
});

export default styles;
