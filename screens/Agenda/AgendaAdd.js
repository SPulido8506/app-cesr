import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

export default function AgendaAdd({ navigation }) {
  const [agenda, setAgenda] = useState({
    nombre: "",
    area: "",
    telefono: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeNombre = (value) => {
    setAgenda({ ...agenda, nombre: value });
  };

  const onChangearea = (value) => {
    setAgenda({ ...agenda, area: value });
  };

  const onChangetelefono = (value) => {
    setAgenda({ ...agenda, telefono: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();
    console.log(agenda);

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.84:3000/agenda", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: agenda.nombre,
        area: agenda.area,
        telefono: agenda.telefono,
      }),
    })
      .then((response) => {
        setLoading(false);
        response.text();
      })
      .then((result) => {
        console.log("Result");
        navigation.push("Agendas");
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
        onChangeText={(value) => onChangeNombre(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Area"}
        onChangeText={(value) => onChangearea(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Telefono"}
        onChangeText={(value) => onChangetelefono(value)}
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
