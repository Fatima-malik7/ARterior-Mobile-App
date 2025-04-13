import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');  // Get screen width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Search bar and record icon container
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingLeft: 20,
    fontSize: 16,
  },
//   recordIconContainer: {
//     marginLeft: 10,
//   },
//   recordIcon: {
//     width: 25,
//     height: 25,
//     resizeMode: 'contain',
//   },
  productContainer: {
    backgroundColor: '#f9f9f9',
    padding: 5,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: (width / 2) - 40,  // Adjust to fit two products per row
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

export default styles;
