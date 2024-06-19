import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Home from "../HomeScreen";
import Search from "../SearchScreen";
import Publish from "../PublishScreen";
import RouteScreen from "../RouteScreen";
import Message from "../MessageScreen";
import Profiles from "../ProfileScreen";
import { COLOR } from "../../outils/const";
import SearchElement from "../SearchScreen/SearchElement";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookRide from "../SearchScreen/BookRide";
import AntDesign from "react-native-vector-icons/AntDesign";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Password from "../ProfileScreen/AccountScreen/Password";
import PaymentMethod from "../ProfileScreen/AccountScreen/PaymentMethod";
import Balance from "../ProfileScreen/AccountScreen/Balance";
import PublishRide from "../ProfileScreen/AccountScreen/PublishRide";
import BecomeDriver from "../ProfileScreen/AccountScreen/BecomeDriver";
import ConditionUse from "../ProfileScreen/AccountScreen/ConditionUse";
import Disconnect from "../ProfileScreen/AccountScreen/Disconnect";
import AddCar from "../ProfileScreen/AccountScreen/AddCar";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SearchStack = () => {
  const BackIcon = () => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={COLOR.orangeColor} />
      </TouchableOpacity>
    );
  };
  return (
    <Stack.Navigator 
    initialRouteName="Search"
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchElement" component={SearchElement} />
      <Stack.Screen name="Book" component={BookRide} options={{
            headerShown: true,
            headerTitle: "Reserver un trajet", 
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily:"Poppins_600SemiBold",
              fontSize: 24,
              color: COLOR.orangeColor,
            },
            headerLeft: () => <BackIcon />,
          }}/>

      
    </Stack.Navigator>
  );
};

const SettingStack =() => {
  const BackIcon = () => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={32} color={COLOR.orangeColor} />
      </TouchableOpacity>
    );
  };
  return(
<Stack.Navigator 
    initialRouteName="BecomeDriver"
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={Profiles} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Payment" component={PaymentMethod} />
      <Stack.Screen name="Balance" component={Balance} />
      <Stack.Screen name="publishRide" component={PublishRide} />
      <Stack.Screen 
      name="AddCar" 
      component={AddCar}
      options={{
        headerShown: true,
        headerTitle: "Ajouter un vehicule", 
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily:"Poppins_600SemiBold",
          fontSize: 24,
          color: COLOR.orangeColor,
        },
        headerLeft: () => <BackIcon />,
      }}/>  
      
      <Stack.Screen 
      name="BecomeDriver" 
      component={BecomeDriver}
      options={{
        headerShown: true,
        headerTitle: "Devenir chauffeur", 
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily:"Poppins_600SemiBold",
          fontSize: 24,
          color: COLOR.lessGreenColor,
        },
        headerLeft: () => <BackIcon />,
      }}/> 
  
      <Stack.Screen name="ConditionUse" component={ConditionUse} />
      <Stack.Screen name="Disconnect" component={Disconnect} />




      <Stack.Screen name="Book" component={BookRide} options={{
            headerShown: true,
            headerTitle: "Reserver un trajet", 
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily:"Poppins_600SemiBold",
              fontSize: 24,
              color: COLOR.orangeColor,
            },
            headerLeft: () => <BackIcon />,
          }}/>

      
    </Stack.Navigator>    
  )
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profiles"
      screenOptions={{
        tabBarActiveTintColor: "#4287f5",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: "Rechercher",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Publier un trajet"
        component={Publish}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 24,
            color: COLOR.orangeColor,
          },
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={COLOR.orangeColor}
              style={{ marginLeft: 10 }}
            />
          ),
          headerShown: true, // Afficher le titre de la page
          tabBarLabel: "Publier",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="add-circle-outline"
              color={color}
              size={size}
            />
          ),
          
        }}
      />
      <Tab.Screen
        name="Route"
        component={RouteScreen}
        options={{
          tabBarLabel: "Trajet",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="route" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "message",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={SettingStack}
        options={{
          tabBarLabel: "profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
