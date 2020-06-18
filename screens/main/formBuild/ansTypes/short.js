import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { TextInput } from "react-native-paper";

export default function ShortAns() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="sentences"
        placeholder="Short answer...."
        dense={true}
        editable={false}
        // multiline={true}
        // value={title}
        // onChangeText={(t) => titleHandle(t)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    // justifyContent: "space-between",
    // backgroundColor: "green",
    margin: 5,
    flex: 1,
  },
  input: {
    paddingLeft: 5,
    paddingHorizontal: 5,
  },
});
