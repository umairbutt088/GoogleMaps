import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import ChooseLocation from './src/screens/chooseLocation';
import FlashMessage from "react-native-flash-message";




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  >
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="chooseLocation" component={ChooseLocation}/>
      </Stack.Navigator>
      <FlashMessage
        position="top"
      />
    </NavigationContainer>
  );
};

export default App;

//screenOptions={{headerShown: false }}