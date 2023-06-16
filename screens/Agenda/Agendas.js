import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Agenda({ navigation }) {
  const [agenda, setAgenda] = useState();

  const getAgendaData = async () => {
    try {
      //   const headers = { "Content-Type": "application/json" };
      let response = await fetch("http://192.168.1.84:3000/agenda");
      let data = await response.json();
      setAgenda(data);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getAgendaData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AgendaDetail", {
            item: item,
          })
        }
      >
        <View style={styles.item}>
          <Text style={styles.title}>{item.nombre}</Text>
          <Text>Area: {item.area} Telefono: {item.telefono}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={agenda}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_agenda}
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