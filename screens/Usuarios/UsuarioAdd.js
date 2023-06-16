import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

export default function UsuarioAdd({ navigation }) {
  const [usuario, setUsuario] = useState({
    user: "",
    tipo: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeuser = (value) => {
    setUsuario({ ...usuario, user: value });
  };

  const onChangetipo = (value) => {
    setUsuario({ ...usuario, tipo: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();
    console.log(usuario);

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.84:3000/usuarios", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        user: usuario.user,
        tipo: usuario.tipo,
      }),
    })
      .then((response) => {
        setLoading(false);
        response.text();
      })
      .then((result) => {
        console.log("Result");
        navigation.push("Usuarios");
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
        placeholder={"Usuario"}
        onChangeText={(value) => onChangeuser(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Tipo"}
        onChangeText={(value) => onChangetipo(value)}
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