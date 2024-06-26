import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PhotoProvider } from './context/PhotoContext';
import { HomeScreen } from './screens/Home/HomeScreen';
import { TakePhotoScreen } from './screens/TakePhoto/TakePhotoScreen';
import { PhotoScreen } from './screens/Photo/PhotoScreen';

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
