import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import Header from "./header";
import FormStater from "./formStater";
import Loading from "./loading";

// import uuid from "react-native-uuid";

import Form from "./form";

export default function Home() {
  // {
  //   console.log(uuid.v4());
  // }
  const [formDetails, setFormDetails] = useState({
    id: "",
    title: "",
    description: "",
  });
  const formDetailsData = (data) => {
    console.log(data);
    setFormDetails({
      id: data.id,
      title: data.title,
      description: data.description,
    });
  };

  const loading = () => {
    // return <Loading />;
    return <Form />;
  };

  const formStater = () => {
    return <FormStater func={formDetailsData.bind(this)} />;
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        {/* ----------MAIN logic-------- */}
        {/* {formDetails.title.length > 0 ? loading() : formStater()} */}

        {/* <Loading /> */}
        <Form />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    paddingLeft: Platform.OS === "web" ? "15%" : 1,
    paddingRight: Platform.OS === "web" ? "15%" : 1,

    // justifyContent: "center",
    // backgroundColor: "green",
  },
});
