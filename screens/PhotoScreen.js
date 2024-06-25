import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PhotoScreen = ({ route, navigation }) => {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo.uri }} style={styles.image} />
      <Text style={styles.text}>Latitud: {photo.location.coords.latitude}</Text>
      <Text style={styles.text}>Longitud: {photo.location.coords.longitude}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PhotoScreen;
