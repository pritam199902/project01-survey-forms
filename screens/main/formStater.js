import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
  Lis,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from "react-native";
import uuid from "react-native-uuid";

import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-paper";

import Loading from "./loading";

export default function FormStater(props) {
  const [formDetails, setFormDetails] = useState({
    id: "",
    title: "",
    description: "",
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleHandle = (t) => {
    setTitle(t);
  };

  const descHandle = (t) => {
    setDescription(t);
  };

  const start = () => {
    formDetails.id = uuid.v4();
    formDetails.title = title;
    formDetails.description = description;
    setFormDetails({
      id: formDetails.id,
      title: formDetails.title,
      description: formDetails.description,
    });
    // console.log(formDetails);
    var result;
    if (formDetails.title !== "") {
      result = true;
    } else {
      result = false;
    }
    console.log(result);
    sendData(result);
  };

  // const [state, setState] = useState("");

  function sendData(result) {
    // console.log("props:  ", props);

    if (result) {
      props.func(formDetails);
    } else {
      alert("Please set a title for your new form!");
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.area}>
        <Text style={styles.heading}>New Form</Text>
        <View style={styles.line} />

        <View style={styles.subArea}>
          <Text style={styles.text}>New Form Title</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="sentences"
            placeholder="Form Title..."
            value={title}
            onChangeText={(t) => titleHandle(t)}
          />

          <Text style={styles.text}>New Form Description</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="sentences"
            placeholder="Form Description...(Optional)"
            value={description}
            onChangeText={(t) => descHandle(t)}
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            start();
          }}
        >
          <View>
            <Text style={styles.btnText}>
              <Icon name="check" size={40} color="#fff" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  area: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    marginBottom: 20,

    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },

    shadowOpacity: 0.7,
    shadowRadius: 5.49,
  },
  heading: {
    fontSize: 22,
    color: "#5555dd",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    color: "#aaaaff",
    marginTop: 15,
    marginHorizontal: 10,
  },
  input: {
    margin: 5,
  },
  btn: {
    backgroundColor: "#5555dd",
    padding: 10,
    margin: 10,
    borderRadius: 40,
    alignSelf: "center",
    paddingHorizontal: 10,
    top: 10,
    marginVertical: 30,

    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },

    shadowOpacity: 0.7,
    shadowRadius: 5.49,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
