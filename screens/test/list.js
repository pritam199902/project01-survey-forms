import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  ImagePropTypes,
} from "react-native";

export default function List(props) {
  console.log(props);

  // const [txt, setTxt] = useState("");
  const question = (list) => {
    return (
      <View
        style={{
          backgroundColor: "#aff",
          // width: "90%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            marginBottom: 10,
            borderBottomColor: "#aaa",
            borderBottomWidth: 2,
          }}
        >
          Title
        </Text>
        {list.map((txt, index) => {
          console.log(txt);

          return (
            <Text
              key={index}
              style={{
                margin: 10,
              }}
            >
              {txt.text}
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {props.data.map((item, index) => {
        console.log(item.inputList);
        return (
          // <Text key={index}>
          //   {/* {index + 1}
          //   {item} */}
          //   test
          // </Text>
          <View style={{ margin: 20 }}>{question(item.inputList)}</View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
    // alignItems: "baseline",
    // justifyContent: "flex-start",
    alignContent: "center",
  },
});
