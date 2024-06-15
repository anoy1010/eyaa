import { View, Text } from 'react-native'
import React from 'react'
import  { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../pages/tabs';
import HomeScreen from '../pages/HomeScreen';
import CarouselComponent from '../pages/HomeScreen/carouselcomponent';
import Connexion from '../pages/ConnexionScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='ConnexionScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Carousel" component={CarouselComponent} />
        <Stack.Screen name="ConnexionScreen" component={Connexion} />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default Routes