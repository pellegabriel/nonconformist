import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  takePictureButton: {
    backgroundColor: '#14AB78',
  },
  confirmButton: {
    backgroundColor: '#000000',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  previewContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A4D4C',
  },
  previewImage: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
  message: {
    textAlign: 'center',
    marginBottom: 20,
  },
  permissionButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
