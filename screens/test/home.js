import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  ImagePropTypes,
  TouchableOpacity,
} from "react-native";

export default function Home(props) {
  // all states--
  const [fildCount, setFildCount] = useState({ count: 0 });
  const [txt, setTxt] = useState({ textArray: [] });
  const [listInput, setListInput] = useState({ inputList: [] });
  // const [textData, setTextData] = useState({ data: "" });
  const [t, setT] = useState({ option: "" });

  // console.log("line 1 : " + t.option);

  const input = (index) => {
    return (
      <TouchableOpacity key={index}>
        {/* {console.log(txt.textArray[index])} */}
        <TextInput
          placeholder="Enter text here..."
          // value={listInput.inputList[index].text}
          autoFocus={true}
          onChangeText={(t) => {
            setValue(t, index);
          }}
        />
      </TouchableOpacity>
    );
  };

  // console.log(listInput);

  const addFild = () => {
    // setFildCount({ count: ++fildCount.count });
    const td = {
      id: fildCount.count,
      text: "",
    };
    setFildCount({ count: fildCount.count + 1 });
    setListInput({ inputList: [...listInput.inputList, td] });
  };

  // setup all valu
  const setall = (i) => {
    setListInput({ inputList: listInput.inputList });
    console.log("inputList: ", listInput.inputList);
  };

  const setValue = (e, i) => {
    setT({ option: e });
    listInput.inputList[i].text = e;
    setall(i);
  };

  const saveIt = () => {
    // console.log(listInput.inputList);
    props.func(listInput);
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Home</Text>
      {listInput.inputList.map((item, index) => {
        // console.log(item);
        // console.log(" index: " + index);
        return input(index);
      })}
      <Button
        title="add"
        onPress={() => {
          addFild();
        }}
        style={styles.button}
      />
      <Button
        title="save"
        onPress={() => {
          saveIt();
        }}
        style={styles.button}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "baseline",
    // justifyContent: "flex-start",
    alignContent: "center",
  },
  button: {
    color: "green",
  },
});
