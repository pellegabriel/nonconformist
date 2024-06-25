import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const PhotoItem = ({ photo, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: photo.uri }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default PhotoItem;
