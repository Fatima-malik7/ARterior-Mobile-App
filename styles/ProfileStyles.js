import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    right: 135,
    top: 70,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    elevation: 5,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  value: {
    color: '#3B82F6',
    fontSize: 14,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#2E7D62',
    borderRadius: 25,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
});
