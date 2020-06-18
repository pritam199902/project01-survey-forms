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
  Image,
  TextInput,
} from "react-native";
import uuid from "react-native-uuid";
import { Audio, Video } from "expo-av";

import Icon from "react-native-vector-icons/FontAwesome";
// import { TextInput } from "react-native-paper";

export default function ListItem(props) {
  // console.log(props);

  const QuestionArea = () => {
    return (
      <View>
        <View style={styles.qn}>
          <Text style={styles.q}>Q. </Text>
          <Text style={styles.headingInput}>
            {props.data.questionData.question}
          </Text>
          {/* <TextInput
          style={styles.headingInput}
          autoCapitalize="sentences"
          placeholder="Section Title..."
          clearButtonMode="while-editing"
          // dense={true}
          // editable={false}
          multiline={true}
          value={props.data.questionData.question}
          // onChangeText={(t) => titleHandle(t)}
        /> */}
        </View>

        {/* //-------------Media Area ----------------------  */}
        <View>
          <View style={styles.mediaArea}>
            {/* <Text>Media</Text> */}
            {props.data.questionData.media.images.map((image, index) => {
              return (
                <View style={styles.imageArea} key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      // selectedImageOption(index);
                    }}
                  >
                    <Image
                      key={index}
                      source={{ uri: image.uri }}
                      style={styles.imageSize}
                      // blurRadius={Platform.OS === "web" ? blur : 0}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View style={styles.mediaArea}>
            {props.data.questionData.media.videos.map((video, index) => {
              return (
                <View style={styles.imageArea} key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      // selectedImageOption(index);
                    }}
                  >
                    <Video
                      source={{
                        // uri:
                        //   "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                        uri: video.uri,
                      }}
                      rate={1.0}
                      volume={1.0}
                      isMuted={false}
                      resizeMode="cover"
                      shouldPlay
                      isLooping
                      style={{
                        width: Platform.OS === "web" ? 220 : 300,
                        height: Platform.OS === "web" ? 220 : 300,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>

        {/* //-------------AnswerArea ---------------------- */}

        <View style={styles.ans}>
          <Text>{props.data.questionData.answerType} </Text>
        </View>
      </View>
    );
  };

  const handleEdit = () => {
    console.log(
      "EDIT:\n SECTION:  " +
        props.keyValue.secId +
        "ITEM :   " +
        props.keyValue.itemId
    );
  };

  const handleRemove = (itemId, secId) => {
    console.log("REMOVE:\n SECTION:  " + secId + "  ITEM :   " + itemId);
    props.sendItemId.func(itemId, secId);
  };

  return (
    <View style={styles.area}>
      {/* <Text style={styles.heading}>title</Text> */}
      {/* ------------------Edit and remove options--------------------------------- */}
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
            handleEdit();
          }}
        >
          <Icon
            name="edit"
            size={25}
            color="#999"
            style={{ marginHorizontal: 15 }}
          />
        </TouchableOpacity> */}

        {/*----------------------Remove Btn--------------------------------- */}
        <TouchableOpacity
          onPress={() => {
            handleRemove(props.keyValue.itemId, props.keyValue.secId);
          }}
        >
          <Icon
            name="remove"
            size={25}
            color="#f55"
            style={{ marginHorizontal: 15 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line} />
      {QuestionArea()}
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    margin: 5,
    // marginBottom: 20,

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
  imageSize: {
    width: Platform.OS === "web" ? 150 : 130,
    height: Platform.OS === "web" ? 150 : 130,
    alignItems: "center",
    justifyContent: "center",
    // margin: 2,
  },
  mediaArea: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
    margin: 5,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#dfdfdf",
    margin: 5,
    marginHorizontal: 10,
  },
  headingInput: {
    margin: 5,
    padding: 10,
    paddingHorizontal: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    flex: 1,
  },
  q: {
    margin: 5,
    // padding: 15,
    paddingHorizontal: 5,
    fontSize: 25,
    fontWeight: "bold",
    color: "#54d",
    alignSelf: "baseline",
    // backgroundColor: "green",
  },
  qn: {
    flexDirection: "row",
    alignItems: "center",
    // flex: 1,
    // backgroundColor: "yellow",
    marginHorizontal: 5,
    marginBottom: 15,
  },
  ans: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    // backgroundColor: "yellow",
    margin: 5,
    marginBottom: 10,
    justifyContent: "center",
  },
  imageArea: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    margin: 5,

    shadowColor: "#000",

    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5.49,
    elevation: 5,
    // width: 150,
    // height: 150,
    // backgroundColsor: "green",
  },
});
