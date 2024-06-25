import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Share, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PhotoContext from '../PhotoContext';

const HomeScreen = ({ navigation, route }) => {
  const { photos, setPhotos } = useContext(PhotoContext);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [gridColumns] = useState(3);

  useEffect(() => {
    if (route.params?.photo) {
      setPhotos(prevPhotos => [...prevPhotos, route.params.photo]);
    }
  }, [route.params?.photo, setPhotos]);

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

const handlePhotoPress = (photo) => {
  navigation.navigate('Photo', { selectedPhoto: photo });
};


  const clearSelection = () => {
    setSelectedPhoto(null);
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        numColumns={gridColumns}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePhotoPress(item)} style={styles.gridItem}>
            <Image source={{ uri: item.uri }} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('TakePhoto')}>
        <MaterialCommunityIcons name="camera" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

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
});

export default HomeScreen;
