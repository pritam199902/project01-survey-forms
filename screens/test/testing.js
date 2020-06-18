import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Home from "./home";
import List from "./list";

export default function Test() {
  const [state, setState] = useState({ show: false });
  const [listData, setListData] = useState({ list: [] });

  console.log("all list:  ", listData);

  const fun = () => {
    setState({ show: !state.show });
  };

  const getData = (i) => {
    // alert("Child Data found : " + i);

    // console.log("data received:  ", i);
    setListData({ list: [...listData.list, i] });
    // console.log("all list:  ", listData.lst);
  };

  //render to another screen
  const calHome = () => {
    return <Home func={getData.bind(this)} />;
  };

  const showList = (data) => {
    return <List data={data} />;
  };

  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Button
        title="Click me"
        onPress={() => {
          fun();
        }}
        style={styles.button}
      />
      <View style={{ width: "80%" }}>
        {state.show ? calHome() : null}
        {listData.list.length > 0 ? (
          showList(listData.list)
        ) : (
          <Text>No data found</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  button: {},
});
