import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function AgendaDetail({ route, navigation }) {
  const { item } = route.params;

  const [agenda, setAgenda] = useState({
    nombre: item.nombre,
    area: item.area,
    telefono: item.telefono,
  });

  const onChangenombre = (value) => {
    setAgenda({ ...agenda, nombre: value });
  };

  const onChangearea = (value) => {
    setAgenda({ ...agenda, area: value });
  };
  
  const onChangetelefono = (value) => {
    setAgenda({ ...agenda, telefono: value });
  };
  const updateData = () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.84:3000/agenda/" + item.id_agenda, {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: agenda.nombre,
        area: agenda.area,
        telefono: agenda.telefono,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Agendas");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const deleteData = () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.84:3000/agenda/" + item.id_agenda, {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: agenda.nombre,
        area: agenda.area,
        telefono: agenda.telefono,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Agendas");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Nombre"}
        onChangeText={(value) => onChangenombre(value)}
        style={styles.input}
        value={agenda.nombre}
      />
      <TextInput
        placeholder={"area"}
        onChangeText={(value) => onChangearea(value)}
        style={styles.input}
        value={agenda.area}
      />
      <TextInput
        placeholder={"telefono"}
        onChangeText={(value) => onChangetelefono(value)}
        style={styles.input}
        value={agenda.telefono}
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