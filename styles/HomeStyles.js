import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 50 : 40, // Adjust padding for iOS vs Android
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: width < 350 ? 26 : 30, // Adjust for smaller screen sizes
    fontWeight:'bold',
    color: '#000',
    marginTop: -15,
    marginLeft: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 25,
    paddingHorizontal: 14,
    marginVertical: 15,
    marginBottom: 25,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16, // Adjust font size for readability
  },
  bannerList: {
    gap: -10,
  },
  banner: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  bannerImage: {
    width: width * 0.9, // Adjust width to be responsive based on screen size
    height: 160,
    borderRadius: 15,
    marginBottom: -210,
  },
  textOverlay: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: width < 350 ? 24 : 30, // Adjust font size for smaller screens
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    color: '#fff',
    fontSize: width < 350 ? 16 : 20, // Adjust font size for smaller screens
  },
  bannerImage2: {
    width: width * 1.1, // Keep full width to match layout
    height: 350,
    borderRadius: 20,
    marginTop: -120,
  },
  textOverlay2: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  bannerTitle2: {
    color: '#fff',
    fontSize: width < 350 ? 24 : 30, // Adjust font size for smaller screens
    fontWeight: 'bold',
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
    left: 22,
    height: 3,
    width: 30,
    backgroundColor: '#2c5f46',
    borderRadius: 1.5,
  },
  videoContainer: {
    marginTop: 5,
    backgroundColor: 'black',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15, // To round corners of the video container
  },
  video: {
    height: 100, // Set height of video container
    width: width * 0.9, // Set video to take full width of its container
  },
});
