import React from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";

const Home = ({ navigation }) => {
  
  return (
    
    <View style={styles.center}>
      <Image source={require('../image/logof.jpg')} style={{width: 280, height: 280}}/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;