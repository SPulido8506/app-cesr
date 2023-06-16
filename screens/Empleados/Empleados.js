import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Empleado({ navigation }) {
  const [empleado, setEmpleado] = useState();

  const getEmpleadoData = async () => {
    try {
      let response = await fetch("http://192.168.1.84:3000/empleados");
      let data = await response.json();
      setEmpleado(data);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getEmpleadoData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("EmpleadosDetail", {
            item: item,
          })
        }
      >
        <View style={styles.item}>
          <Text style={styles.title}>{item.nombre}</Text>
          <Text>telefono: {item.telefono}</Text>
          <Text>Puesto: {item.puesto}</Text>
          <Text>Area: {item.area}</Text>
          
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={empleado}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_empleado}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  item: {
    width: 400,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#30A2FF",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#ccc",
  },
});