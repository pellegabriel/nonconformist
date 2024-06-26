import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A4D4C',
  },
  previewImage: {
    width: '100%',
    height: '60%', 
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  shareButton: {
    position: 'absolute',
    bottom: '10%',
    right: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 50,
  },
  closeButton: {
    position: 'absolute',
    top: '8%',
    left: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 50,
  },
});

export default styles;
