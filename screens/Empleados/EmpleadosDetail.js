import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function EmpleadoDetail({ route, navigation }) {
  const { item } = route.params;

  const [empleado, setEmpleado] = useState({
    nombre: item.nombre,
    telefono: item.telefono,
    puesto: item.puesto,
    area: String(item.area),
    
  });

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
    setEmpleado({ ...empleado, area: value });
  };

  const updateData = () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.84:3000/empleados/" + item.id_empleado, {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: empleado.nombre,
        telefono: empleado.telefono,
        puesto: empleado.puesto,
        area: parseInt(empleado.area),
        
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Empleados");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const deleteData = () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.84:3000/empleados/" + item.id_empleado, {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: empleado.nombre,
        telefono: empleado.telefono,
        puesto: empleado.puesto,
        area: parseInt(empleado.area),
        
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Empleados");
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
        value={empleado.nombre}
      />
      <TextInput
        placeholder={"telefono"}
        onChangeText={(value) => onChangetelefono(value)}
        style={styles.input}
        value={empleado.telefono}
      />
      <TextInput
        placeholder={"puesto"}
        onChangeText={(value) => onChangepuesto(value)}
        style={styles.input}
        value={empleado.puesto}
      />
      <TextInput
        placeholder={"area"}
        onChangeText={(value) => onChangearea(value)}
        style={styles.input}
        value={empleado.area}
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