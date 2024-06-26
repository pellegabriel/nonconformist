import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: '10%'
  },
  gridItem: {
    width: (Dimensions.get('window').width-80) / 3, 
    aspectRatio: 1,
    margin: 5,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 50,
  },
  previewContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  previewImage: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
  shareButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 50,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 50,
  },
    loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContent: {
    alignItems: 'center',
  },
  loadingText: {
    marginBottom: 10,
    fontSize: 18,
  },
});


export default styles;
