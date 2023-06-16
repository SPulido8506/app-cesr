import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

// Vista Home
import HomeScreen from "../screens/Home";

// Vistas Usuarios
import UsuarioScreen from "../screens/Usuarios/Usuarios";
import UsuarioDetailScreen from "../screens/Usuarios/UsuarioDetail";
import UsuarioAddScreen from "../screens/Usuarios/UsuarioAdd";

// Vistas Empleados
import EmpleadosScreen from "../screens/Empleados/Empleados";
import EmpleadoDetailScreen from "../screens/Empleados/EmpleadosDetail";
import EmpleadoAddScreen from "../screens/Empleados/EmpleadosAdd";

// Vistas Agenda
import AgendaScreen from "../screens/Agenda/Agendas";
import AgendaDetailScreen from "../screens/Agenda/AgendaDetail";
import AgendaAddScreen from "../screens/Agenda/AgendaAdd";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#000080",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );  
}

const UsuarioStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Usuarios"
        component={UsuarioScreen}
        options={({ navigation, route }) => ({
          title: "Lista de usuarios",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("UsuarioAdd")}
            />
          ),
        })}
      />
      <Stack.Screen name="UsuarioDetail" component={UsuarioDetailScreen} />
      <Stack.Screen name="UsuarioAdd" component={UsuarioAddScreen} />
    </Stack.Navigator>
  );
};

const DocenteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
     <Stack.Screen
        name="Empleados"
        component={EmpleadosScreen}
        options={({ navigation, route }) => ({
          title: "Lista de Empleados",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("EmpleadosAdd")}
            />
          ),
        })}
      />
      <Stack.Screen name="EmpleadosDetail" component={EmpleadoDetailScreen} />
      <Stack.Screen name="EmpleadosAdd" component={EmpleadoAddScreen} />
    </Stack.Navigator>
  );
};

const MateriaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Agendas"
        component={AgendaScreen}
        options={({ navigation, route }) => ({
          title: "Agenda Telefonica",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("AgendaAdd")}
            />
          ),
        })}
      />
      <Stack.Screen name="AgendaDetail" component={AgendaDetailScreen} />
      <Stack.Screen name="AgendaAdd" component={AgendaAddScreen} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  UsuarioStackNavigator,
  DocenteStackNavigator,
  MateriaStackNavigator,
};