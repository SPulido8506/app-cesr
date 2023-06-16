import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

export default function EmpleadoAdd({ navigation }) {
  const [empleado, setEmpleado] = useState({
    nombre: "",
    telefono: "",
    puesto: "",
    Area: 0,
  });

  const [loading, setLoading] = useState(false);

  const onChangenombre = (value) => {
    setEmpleado({ ...empleado, nombre: value });
  };

  const onChangetelefono = (value) => {
    setEmpleado({ ...empleado, telefono: value });
  };

  const onChangepuesto = (value) => {
    setEmpleado({ ...empleado, puesto: value });
  };

  const onChangearea = (value) => {
    setEmpleado({ ...empleado, Area: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();
    console.log(empleado);

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.84:3000/empleados", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: empleado.nombre,
        telefono: empleado.telefono,
        puesto: empleado.puesto,
        area: parseInt(empleado.Area),
      }),
    })
      .then((response) => {
        setLoading(false);
        response.text();
      })
      .then((result) => {
        console.log("Result");
        navigation.push("Empleados");
        console.log(result);
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Nombre"}
        onChangeText={(value) => onChangenombre(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Telefono"}
        onChangeText={(value) => onChangetelefono(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Puesto"}
        onChangeText={(value) => onChangepuesto(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Area"}
        onChangeText={(value) => onChangearea(value)}
        style={styles.input}
      />

      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: "blue", padding: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>
            {loading ? "Cargando..." : "Guardar"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});