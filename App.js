import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PhotoProvider } from './PhotoContext'; // Importa el PhotoProvider desde su ubicación correcta
import HomeScreen from './screens/HomeScreen';
import TakePhotoScreen from './screens/TakePhotoScreen';
import PhotoScreen from './screens/PhotoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PhotoProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TakePhoto" component={TakePhotoScreen} />
          <Stack.Screen name="Photo" component={PhotoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PhotoProvider>
  );
};

export default App;
