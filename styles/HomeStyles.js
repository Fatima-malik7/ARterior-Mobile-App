import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // cartIcon: {
  //   position: 'relative',
  //  alignContent: 'left',
  //  marginRight: 4,
  // },
  // cartBadge: {
  //   position: 'absolute',
  //   top: -2,
  //   right: -2,
  //   backgroundColor: '#2c5f46',
  //   borderRadius: 10,
  //   paddingHorizontal: 4,
  //   paddingVertical: 1,
  // },
  // badgeText: {
  //   color: '#fff',
  //   fontSize: 10,
  // },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 25,
    paddingHorizontal: 14,
    marginVertical: 15,marginBottom: 25,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  bannerList: {
    gap: -10,
  },
  banner: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 160,
    borderRadius: 15,
    marginBottom: -180, // optional: small bottom margin
  },
  textOverlay: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 30, // Increased font size here
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    color: '#fff',
    fontSize: 20, // Increased font size here
  },
  
  bannerImage2: {
    width: '110%', // keep full width to match layout
    height: 350, // bigger than bannerImage
    borderRadius: 20,
    marginTop: -120, // reduce gap/overlap
  },
  textOverlay2: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  bannerTitle2: {
    color: '#fff',
    fontSize: 30, // Increased font size here
    fontWeight: 'bold',
  },
  
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#f1f1f1',
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
});
