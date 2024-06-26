import React, { useState, useRef, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import styles from './TakePhotoScreenStyles';

export const TakePhotoScreen = ({ navigation }) => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [locationPermission, setLocationPermission] = useState(null);
  const [photoData, setPhotoData] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status === 'granted');
    })();
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <TouchableOpacity style={[styles.button, styles.permissionButton]} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!locationPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to access your location</Text>
        <TouchableOpacity style={[styles.button, styles.permissionButton]} onPress={async () => {
          const { status } = await Location.requestForegroundPermissionsAsync();
          setLocationPermission(status === 'granted');
        }}>
          <Text style={styles.buttonText}>Grant Location Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      let location = await Location.getCurrentPositionAsync({});
      console.log('Photo taken:', photo);
      console.log('Location:', location);
      setPhotoData({ ...photo, location });
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
            <TouchableOpacity style={[styles.button, styles.takePictureButton]} onPress={takePicture}>
              <Ionicons name="camera" size={24} color="white" />
            </TouchableOpacity>
        </View>
      </CameraView>

      {photoData ? (
        <View style={styles.previewContainer}>
        <Text style={styles.text}>
          Latitude: {photoData.location.coords.latitude.toFixed(6)}
        </Text>
        <Text style={styles.text}>
          Longitude: {photoData.location.coords.longitude.toFixed(6)}
        </Text>
          <Image source={{ uri: photoData.uri }} style={styles.previewImage} />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={confirmPhoto}>
              <Ionicons name="checkmark-circle" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={cancelPhoto}>
              <Ionicons name="close-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};