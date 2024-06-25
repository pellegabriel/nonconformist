import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import PhotoItem from '../components/PhotoItem';

const HomeScreen = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);

  const navigateToTakePhoto = () => {
    navigation.navigate('TakePhotoScreen', { setPhotos });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PhotoItem
            photo={item}
            onPress={() => navigation.navigate('PhotoScreen', { photo: item })}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={navigateToTakePhoto}>
        <Text style={styles.buttonText}>Tomar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
