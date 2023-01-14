import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

// Screens
import Home from './src/screens/home';
import AttractionDetails from './src/screens/AttractionDetail/index'
import Gallery from './src/screens/Gallery/index'

const App = () => {
  const [color, setColor] = useState('pink');

  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={AttractionDetails} name="AttractionDetails" />
        <Stack.Screen component={Gallery} name="Gallery" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'red',
  },
  view: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    textAlign: 'center',
  },
});

export default App;
