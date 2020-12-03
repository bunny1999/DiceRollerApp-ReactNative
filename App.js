import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [state, setstate] = useState({
    uri: require("./src/images/dice1.png"),
  });

  getRandom = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  onclick = () => {
    switch (getRandom()) {
      case 1:
        setstate({ uri: require("./src/images/dice1.png") });
        break;
      case 2:
        setstate({ uri: require("./src/images/dice2.png") });
        break;
      case 3:
        setstate({ uri: require("./src/images/dice3.png") });
        break;
      case 4:
        setstate({ uri: require("./src/images/dice4.png") });
        break;
      case 5:
        setstate({ uri: require("./src/images/dice5.png") });
        break;
      case 6:
        setstate({ uri: require("./src/images/dice6.png") });
        break;
    }
  };

  return (
    <View style={styles.container}>
        <Image source={state.uri}/>
        <TouchableOpacity onPress={onclick}>
          <Text style={styles.button}>Roll Me!</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor:"#0ABDE3",
    marginTop:40,
    paddingVertical:5,
    paddingHorizontal:20,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    borderRadius: 10,
  },
});
