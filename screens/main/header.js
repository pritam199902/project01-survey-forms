import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
} from "react-native";

export default function Header() {
  // console.log(landscape);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Forms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "darkslateblue",
    alignContent: "center",
    padding: 10,
    // elevation: 10,
    width: "100%",

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },

    shadowOpacity: 0.5,
    shadowRadius: 7.49,

    elevation: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fafafa",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 1,
      height: 5,
    },
  },
});
