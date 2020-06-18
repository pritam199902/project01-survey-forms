import React, { useState } from "react";
import { Text, View, Picker, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function AnswerTypePicker(props) {
  const ansType = {
    types: [
      { id: 1, type: "mcq", text: "MCQ" },
      { id: 2, type: "short", text: "Short Answer" },
      { id: 3, type: "long", text: "Paragraph" },
      { id: 4, type: "checkBox", text: "Checkbox" },
      { id: 5, type: "file", text: "File Upload" },
      {
        id: 6,
        type: "linearScale",
        text: "Linear Scale",
        icon: "sort-numeric-asc",
      },
      {
        id: 7,
        type: "checkboxGrid",
        text: "Checkbox Grid",
        icon: "check-square",
      },
      { id: 8, type: "mcqGrid", text: "MCQ Grid", icon: "dot-circle-o" },
      { id: 9, type: "date", text: "Date", icon: "calendar" },
      { id: 10, type: "time", text: "Time", icon: "calendar" },
      { id: 11, type: "dropDown", text: "Dropdown", icon: "toggle-down" },
    ],
  };

  const [selectedValue, setSelectedValue] = useState();

  const handleSelectedAnswerType = (item) => {
    // console.log(item);
    // props.sendAnsType(item);
    setSelectedValue(item);
    props.sendAnsType(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Answer type</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 180 }}
        onValueChange={(item, index) => handleSelectedAnswerType(item)}
      >
        {/* <Picker.Item /> */}
        {props.typeList.types.map((data, index) => {
          //   console.log(data);
          return (
            <Picker.Item label={data.text} value={data.type} key={index} />
          );
        })}
        {/* <Picker.Item label="Java" value="java" /> */}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "green",
  },
  text: {
    fontSize: 18,
    color: "#999999",
    marginHorizontal: 20,
  },
});
