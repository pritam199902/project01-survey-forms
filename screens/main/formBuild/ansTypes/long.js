import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { TextInput } from "react-native-paper";

export default function LongAns() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="sentences"
        placeholder="Long answer...."
        dense={true}
        editable={false}
        numberOfLines={5}
        multiline={true}
        // value={title}
        // onChangeText={(t) => titleHandle(t)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
  },
  input: {
    paddingLeft: 5,
    paddingHorizontal: 5,
  },
});
