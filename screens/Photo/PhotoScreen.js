import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Share } from 'react-native';
import styles from './PhotoScreenStyles';

export const PhotoScreen = ({ route, navigation }) => {
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