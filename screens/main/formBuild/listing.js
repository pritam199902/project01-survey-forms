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
  Image,
  Platform,
  TextInput,
} from "react-native";
import uuid from "react-native-uuid";

import Icon from "react-native-vector-icons/FontAwesome";
// import { TextInput } from "react-native-paper";

import Item from "./list";

export default function List(props) {
  console.log(props);

  const handleSectionEdit = (sectionIndex) => {
    console.log("EDIT:\n SECTION:  " + sectionIndex);
  };

  const handleSectionRemove = (sectionIndex) => {
    console.log("REMOVE:\n SECTION:  " + sectionIndex);
    props.data.sendSectionId(sectionIndex);
  };

  const handleItemIdRemove = (itemId, secId) => {
    console.log(itemId);
    props.data.sendBackItemId(itemId, secId);
  };

  // console.log(props.data);

  const sectionHeadingComponent = (eachSection, sectionIndex) => {
    return (
      <View key={sectionIndex}>
        <View style={styles.upper}>
          <Text style={styles.sectionText}>
            Section {eachSection.sectionNo + 1}
          </Text>
        </View>
        <View style={styles.area}>
          {/* Edit and Delete option btn space */}
          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "green",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {/*----------------------Edit Btn--------------------------------- */}
            {/* <TouchableOpacity
              onPress={() => {
                handleSectionEdit(sectionIndex);
              }}
            >
              <Icon
                name="pencil"
                size={30}
                color="#999"
                style={{ marginHorizontal: 15 }}
              />
            </TouchableOpacity> */}

            {/*----------------------Remove Btn--------------------------------- */}
            {props.data.currentSectionId !== sectionIndex && (
              <TouchableOpacity
                onPress={() => {
                  handleSectionRemove(sectionIndex);
                }}
              >
                <Icon
                  name="trash-o"
                  size={30}
                  color="#f55"
                  style={{ marginHorizontal: 15 }}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.line} />

          {/*--------------------- Section TITLE------------------- */}
          {/* <TouchableOpacity> */}
          <TextInput
            style={styles.headingInput}
            autoCapitalize="sentences"
            placeholder="Section Title..."
            clearButtonMode="while-editing"
            // dense={true}
            editable={false}
            // multiline={true}
            value={eachSection.sectionTitle}
            // onChangeText={(t) => titleHandle(t)}
          />
          <TextInput
            style={styles.descInput}
            autoCapitalize="sentences"
            placeholder="Section Description..."
            clearButtonMode="while-editing"
            // dense={true}
            editable={false}
            // multiline={true}
            value={eachSection.sectionDescription}
            // onChangeText={(t) => titleHandle(t)}
          />
          {/* </TouchableOpacity> */}
        </View>
        {eachSection.sectionData.map((data, dataIndex) => {
          // console.log(data);

          return (
            <Item
              key={dataIndex}
              keyValue={{ secId: sectionIndex, itemId: dataIndex }}
              data={{ questionData: data }}
              sendItemId={{ func: handleItemIdRemove.bind(this) }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View>
      {props.data.sectionList.map((eachSection, index) => {
        if (
          props.data.sectionList.length > 1 ||
          eachSection.sectionData.length > 0
        ) {
          return sectionHeadingComponent(eachSection, index);
        }
      })}

      {/* {sectionHeadingComponent()} */}
      {/* <Item /> */}
      {/* <View style={styles.line} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    // marginHorizontal: 10,
    // marginBottom: 10,
    // marginTop: 30,
    paddingTop: 5,

    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },

    shadowOpacity: 0.7,
    shadowRadius: 5.49,
    // backgroundColor: "green",
  },
  heading: {
    fontSize: 24,
    color: "#5555dd",
    // fontWeight: "bold",
    alignSelf: "baseline",
    // marginVertical: 5,
    marginHorizontal: 15,
  },
  subHeading: {
    fontSize: 18,
    color: "#aaaaff",
    // marginTop: 15,
    marginHorizontal: 15,
  },
  headingInput: {
    margin: 5,
    // paddingLeft: 5,
    paddingHorizontal: 5,
    fontSize: 25,
    fontWeight: "bold",
  },
  descInput: {
    margin: 5,
    // paddingLeft: 5,
    paddingHorizontal: 5,
    fontSize: 16,
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
  imageSize: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    // margin: 2,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#dfdfdf",
    margin: 5,
    marginHorizontal: 10,
  },
  upper: {
    backgroundColor: "#fff",
    alignSelf: "baseline",
    marginHorizontal: 10,
    marginTop: 40,
    paddingHorizontal: 10,
    // paddingVertical: 2,
    borderRadius: 6,

    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },

    shadowOpacity: 0.7,
    shadowRadius: 5.49,
  },
  sectionPart: {
    backgroundColor: "#fff",
    // padding: 5,
    // width: "30%",
    alignItems: "center",
    // paddingVertical: 8,
    marginHorizontal: 5,
    justifyContent: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },

    shadowOpacity: 0.7,
    shadowRadius: 2.49,
    borderRadius: 6,
  },
  sectionText: {
    fontSize: 18,
    color: "#88f",
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 4,
    // padding: 4,
  },
});
