import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Share } from 'react-native';

const PhotoScreen = ({ route, navigation }) => {
  const { selectedPhoto } = route.params;

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this photo!',
        url: selectedPhoto.uri,
      });
    } catch (error) {
      console.error('Error sharing photo:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedPhoto.uri }} style={styles.previewImage} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Latitude: {selectedPhoto.location.coords.latitude.toFixed(6)}
        </Text>
        <Text style={styles.text}>
          Longitude: {selectedPhoto.location.coords.longitude.toFixed(6)}
        </Text>
      </View>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <MaterialCommunityIcons name="share" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A4D4C',
  },
  previewImage: {
    width: '100%',
    height: '60%', // Ajustar la altura según sea necesario
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
    bottom: '10%', // Ajustar según sea necesario
    right: 20, // Ajustar según sea necesario
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 50,
  },
  closeButton: {
    position: 'absolute',
    top: '8%', // Ajustar según sea necesario
    left: 20, // Ajustar según sea necesario
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 50,
  },
});

export default PhotoScreen;
