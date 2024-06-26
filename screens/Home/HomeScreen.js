import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PhotoContext from '../../context/PhotoContext';
import styles from './HomeScreenStyles';

export const HomeScreen = ({ navigation, route }) => {
  const { photos, setPhotos } = useContext(PhotoContext);
  const [gridColumns] = useState(3);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (route.params?.photo) {
      setPhotos(prevPhotos => [...prevPhotos, route.params.photo]);
    }
    setLoading(false); 
  }, [route.params?.photo, setPhotos]);

  const handlePhotoPress = (photo) => {
    navigation.navigate('Photo', { selectedPhoto: photo });
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

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