import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
  Platform,
} from "react-native";

import Test from "./screens/test/testing";

import Home from "./screens/main/home";

import VideoPlayer from "./screens/main/formBuild/showVideo";
import DateTimePicker from "./screens/main/formBuild/dateTimePicker";
import Menu from "./screens/main/menu";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      {/* <VideoPlayer /> */}
      {/* <DateTimePicker /> */}
      {/* <Menu /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    height: "100%",
    backgroundColor: "#ddddfd",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    // backgroundColor: "green",
    // marginTop: 10,
  },
});
