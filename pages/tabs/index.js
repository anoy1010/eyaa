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


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profiles"
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
        name="Publication"
        component={Publish}
        options={{
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