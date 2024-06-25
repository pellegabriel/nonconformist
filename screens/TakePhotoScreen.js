import React, { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const TakePhotoScreen = ({ navigation }) => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photoData, setPhotoData] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log('Photo taken:', photo);
      setPhotoData(photo);
    }
  };

  const confirmPhoto = () => {
    navigation.navigate('Home', { photo: photoData }); 
  };


  const cancelPhoto = () => {
    setPhotoData(null);
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.cameraContainer}>
        </View>
        <View style={styles.buttonContainer}>
          {!photoData && (
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Ionicons name="camera-reverse" size={24} color="white" />
            </TouchableOpacity>
          )}
          {!photoData && (
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Ionicons name="camera" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </CameraView>

      {photoData ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photoData.uri }} style={styles.previewImage} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={confirmPhoto}>
              <Ionicons name="checkmark-circle" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cancelPhoto}>
              <Ionicons name="close-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

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
    bottom: 20,
    width: '100%',
  },
  button: {
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  previewContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  previewImage: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
});

export default TakePhotoScreen;
