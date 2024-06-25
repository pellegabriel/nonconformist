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
      <Text style={styles.description}>{selectedPhoto.description}</Text>
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
    backgroundColor: '#000',
  },
  previewImage: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
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
});

export default PhotoScreen;
