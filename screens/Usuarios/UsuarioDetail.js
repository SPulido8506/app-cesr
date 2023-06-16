import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function UsuarioDetail({ route, navigation }) {
  const { item } = route.params;

  const [usuario, setUsuario] = useState({
    user: item.user,
    tipo: item.tipo,
  });

  const onChangeUser = (value) => {
    setUsuario({ ...usuario, user: value });
  };

  const onChangetipo = (value) => {
    setUsuario({ ...usuario, tipo: value });
  };

  const updateData = () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.84:3000/usuarios/" + item.id_usuario, {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        user: usuario.user,
        tipo: usuario.tipo,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Usuarios");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const deleteData = () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.84:3000/usuarios/" + item.id_usuario, {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify({
        user: usuario.user,
        tipo: usuario.tipo,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Usuarios");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Usuario"}
        onChangeText={(value) => onChangeUser(value)}
        style={styles.input}
        value={usuario.user}
      />
      <TextInput
        placeholder={"Tipo"}
        onChangeText={(value) => onChangetipo(value)}
        style={styles.input}
        value={usuario.tipo}
      />

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: "blue", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Guardar cambios
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: "red", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Borrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});