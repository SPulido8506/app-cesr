import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  HomeStackNavigator,
  UsuarioStackNavigator,
  DocenteStackNavigator,
  MateriaStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeTab") {
            iconName = focused ? "home-outline" : "home";
          } else if (route.name === "UsuariosTab") {
            iconName = focused ? "people-outline" : "people";
          } else if (route.name === "EmpleadosTab") {
            iconName = focused ? "body-outline" : "body";
          } else if (route.name === "AgendaTab") {
            iconName = focused ? "book-outline" : "book";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="UsuariosTab"
        component={UsuarioStackNavigator}
        options={{
          tabBarLabel: "Usuarios",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="EmpleadosTab"
        component={DocenteStackNavigator}
        options={{
          tabBarLabel: "Empleados",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="AgendaTab"
        component={MateriaStackNavigator}
        options={{
          tabBarLabel: "Agenda",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;