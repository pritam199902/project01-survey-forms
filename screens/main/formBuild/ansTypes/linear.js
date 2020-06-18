import React, { useState } from "react";
import { StyleSheet, Picker, Text, View, Platform } from "react-native";

import { TextInput } from "react-native-paper";

export default function ShortAns() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}> From </Text>
        <Picker
          style={{ height: 35, width: 100, marginRight: 10 }}
          //   selectedValue={selectedValue}
          //   onValueChange={(item, index) => handleSelectedAnswerType(item)}
        >
          <Picker.Item label="1" value="1" />
        </Picker>
        <Text style={styles.text}> To </Text>

        <Picker
          style={{ height: 35, width: 100 }}
          //   selectedValue={selectedValue}
          //   onValueChange={(item, index) => handleSelectedAnswerType(item)}
        >
          <Picker.Item label="1" value="1" />
        </Picker>
      </View>
      <View style={styles.col}>
        <View style={styles.row}>
          <Text style={styles.text}>Start</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="sentences"
            placeholder="Label...."
            dense={true}
            // editable={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>End</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="sentences"
            placeholder="Label...."
            dense={true}
            // editable={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
    margin: 5,

    flex: 1,
  },
  input: {
    // paddingLeft: 5,
    paddingHorizontal: 5,
    margin: 5,
  },
  row: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  col: {
    flexDirection: "column",
    margin: 10,
  },
  text: {
    color: "#999999",
    fontSize: 15,
    margin: 5,
  },
});
