import React, { useState } from "react";

import { ActivityIndicator, Colors } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator animating={true} color={"#5555ff"} size={40} />
      <Text style={styles.loadingText}>Creating your form...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "auto",
    marginBottom: 40,
    margin: 20,
  },
  loadingText: {
    color: "gray",
    margin: 20,
  },
});
