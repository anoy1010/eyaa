import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../HomeScreen';
import Search from '../SearchScreen';
import Publish from '../PublishScreen';
import RouteScreen from '../RouteScreen';
import Message from '../MessageScreen';
import Profiles from '../ProfileScreen';
import { COLOR } from '../../outils/const';
import SearchElement from '../SearchScreen/SearchElement';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarActiveTintColor: '#4287f5',
        headerShown: false,
      }}
    >
      <Tab.Screen
      
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Rechercher',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Publier un trajet"
        component={Publish}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle:{ 
            fontSize: 24,
            color:COLOR.orangeColor },
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={COLOR.orangeColor}
              style={{ marginLeft: 10 }}
             
            />
          ),
          headerShown: true, // Afficher le titre de la page // Titre de la page
          tabBarLabel: 'Publier',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle-outline" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Route"
        component={RouteScreen}
        options={{
          
          tabBarLabel: 'Trajet',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="route" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: 'message',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={Profiles }
        options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default BottomTabs