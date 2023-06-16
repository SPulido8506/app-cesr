import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Usuario({ navigation }) {
  const [usuario, setUsuario] = useState();

  const getUsuarioData = async () => {
    try {
      //   const headers = { "Content-Type": "application/json" };
      let response = await fetch("http://192.168.1.84:3000/usuarios");
      let data = await response.json();
      setUsuario(data);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getUsuarioData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("UsuarioDetail", {
            item: item,
          })
        }
      >
        <View style={styles.item}>
          <Text style={styles.title}>{item.user}</Text>
          <Text>Tipo: {item.tipo}</Text>
          
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={usuario}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_usuario}
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