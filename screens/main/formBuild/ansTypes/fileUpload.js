import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
export default function FileUpload() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upload your file </Text>
      <Icon name="cloud-upload" size={50} color="#aaa" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // backgroundColor: "green",
    margin: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#999999",
    fontSize: 15,
    margin: 10,
  },
});
