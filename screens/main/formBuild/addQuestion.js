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
  Button,
  TextInput as TxInRn,
} from "react-native";
import uuid from "react-native-uuid";

import Icon from "react-native-vector-icons/FontAwesome";
import {
  TextInput,
  Dialog,
  Provider,
  Portal,
  Menu,
  Divider,
} from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Audio, Video } from "expo-av";

import AnswerTypePicker from "./answerTypePicker";
import Short from "./ansTypes/short";
import Long from "./ansTypes/long";
import LinearScale from "./ansTypes/linear";
import File from "./ansTypes/fileUpload";
import ImageUpload from "./ansTypes/imageUpload";

import MM from "../menu";

export default function AddQuestion(props) {
  // -----------------Answer Type Data -------------------------------------
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
  const [answerTypeSelected, setAnswerTypeSelected] = useState("mcq");
  // console.log(answerTypeSelected);
  const getAnsType = (data) => {
    // console.log(data);
    setAnswerTypeSelected(data);
  };

  // -----------------------------------------------------------------------

  // ------------- Answers section -----------------------------------------

  // add more ans btn component
  const addBtn = (type) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            addMoreAnsCompBtn(type);
          }}
          style={styles.addAnsBtn}
        >
          {/* <Text style={styles.btnText}> */}
          <Icon name="plus-circle" size={30} color="#aaa" />
          {/* </Text> */}
        </TouchableOpacity>
      </>
    );
  };

  // const [OptionList, setOptionList] = useState({ answerOptions: [] });

  const addMoreAnsCompBtn = (type) => {
    console.log(type);
    // setOptionList({ answerOptions: [
    //  {
    //    type: type,
    //  }
    // ] })
  };

  const removeBtnHandle = () => {
    alert("removed btn clicked");
  };

  const removeBtn = () => {
    return (
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => {
          removeBtnHandle();
        }}
      >
        <Icon name="remove" size={30} color="#f88" />
      </TouchableOpacity>
    );
  };

  // upload media handler----------------------------------------------------------

  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [mediaData, setMediaData] = useState({ images: [], videos: [] });
  const [questionText, setQuestionText] = useState("");

  const handleQuestionInput = (t) => {
    setQuestionText(t);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // ImagePicker.launchImageLibraryAsync
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      allowsMultipleSelection: true,
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setMediaData({
        images: [...mediaData.images, result],
        videos: [...mediaData.videos],
      });
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // ImagePicker.launchImageLibraryAsync
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [1, 1],
      allowsMultipleSelection: true,
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      console.log(result);

      setVideo(result.uri);
      setMediaData({
        images: [...mediaData.images],
        videos: [...mediaData.videos, result],
      });
    }
  };

  //Show video component
  // const showVideo = () => {
  //   return (
  //     <Video
  //       source={{
  //         uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  //       }}
  //       rate={1.0}
  //       volume={1.0}
  //       isMuted={false}
  //       resizeMode="cover"
  //       shouldPlay
  //       isLooping
  //       style={{ width: 300, height: 300 }}
  //     />
  //   );
  // };

  // Media btn-------------------------------------------------------
  const handleAddMediaBtn = () => {
    // alert("Media btn clicked");
    pickImage();
  };

  const handleVideoAddMediaBtn = () => {
    // alert("Media btn clicked");
    pickVideo();
  };

  const addMediaBtn = () => {
    return (
      <TouchableOpacity
        style={styles.mdBtn}
        onPress={() => {
          handleAddMediaBtn();
        }}
      >
        <Icon name="photo" size={20} color="#99f" />
      </TouchableOpacity>
    );
  };

  const addVideoMediaBtn = () => {
    return (
      <TouchableOpacity
        style={styles.mdBtn}
        onPress={() => {
          handleVideoAddMediaBtn();
        }}
      >
        <Icon name="video-camera" size={20} color="#99f" />
      </TouchableOpacity>
    );
  };

  // --------------------------- media remove btn for web only----------------------------------

  // const [removeMediaWebState, setRemoveMediaWebState] = useState(false);
  // const [blur, setBlur] = useState(0);

  // const alertCallWeb = (index) => {
  //   return (
  //     <>
  //       <TouchableOpacity style={styles.removeMediaWebBtn}>
  //         <Icon name="trash-o" size={30} color="#faa" />
  //       </TouchableOpacity>
  //     </>
  //   );
  // };

  // const handleBlur = () => {
  //   return 10;
  // };

  // --------- removing design for web-----------------------------------------
  // VIDEO TREMOVER--------------------------------
  const removeAlert = (index) => {
    alert("Removed!");
    handleRemove(index);
  };

  const alertCall = (index) => {
    // console.log(" alert called");

    // Alert-----------------------------not working in Web-----------------------
    Alert.alert(
      "Remove Media",
      "Do you want to remove it?",
      [
        {
          text: "Remove",
          onPress: () => handleRemove(index),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        // { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  const handleRemove = (index) => {
    mediaData.images.splice(index, 1);
    setMediaData({
      images: [...mediaData.images],
      videos: [...mediaData.videos],
    });
  };

  // ------platform wise remove designing-------------------------------
  const selectedImageOption = (index) => {
    {
      Platform.OS !== "web" && alertCall(index);
    }
    {
      Platform.OS === "web" && removeAlert(index);
    }
  };

  // VIDEO TREMOVER--------------------------------
  const alertCallVideo = (index) => {
    // console.log(" alert called");
    // Alert-----------------------------not working in Web-----------------------
    Alert.alert(
      "Remove Media",
      "Do you want to remove it?",
      [
        {
          text: "Remove",
          onPress: () => handleVideoRemove(index),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        // { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  const removeVideoAlert = (index) => {
    alert("Removed!");
    handleVideoRemove(index);
  };

  const handleVideoRemove = (index) => {
    mediaData.videos.splice(index, 1);
    setMediaData({
      images: [...mediaData.images],
      videos: [...mediaData.videos],
    });
  };

  const selectedVideoOption = (index) => {
    {
      Platform.OS !== "web" && alertCallVideo(index);
    }
    {
      Platform.OS === "web" && removeVideoAlert(index);
    }
  };

  // ------------------------------Answer components---------------------------------------------------------

  // const mcqComp = () => {
  //   return <Mcq />;
  // };

  const shortComp = () => {
    return <Short />;
  };
  const longComp = () => {
    return <Long />;
  };
  const LinearComp = () => {
    return <LinearScale />;
  };
  const DateComp = () => {
    // return <Date />;
  };
  const TimeComp = () => {
    // return <Short />;
  };
  const FileComp = () => {
    return <File />;
  };

  // ###########################  Section heading component  ###############################

  const [secText, setSecText] = useState("");
  const [secDescText, setSecDescText] = useState("");

  const secTextHabdle = (t) => {
    setSecText(t);
    props.data.editSecTitle(t, props.data.sectionNo);
  };

  const secDescTextHabdle = (t) => {
    setSecDescText(t);
    props.data.editSecDesc(t, props.data.sectionNo);
  };

  const sectionHeadingComponent = () => {
    return (
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "#f00",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View style={styles.upper}>
            <Text style={styles.sectionText}>
              Section {props.data.sectionNo + 1}
            </Text>

            <View style={styles.span}>
              <Text style={styles.spanText}>{props.data.questionCounter}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              addNewSection();
            }}
          >
            {/* <Text style={styles.sectionText}> */}
            <Icon
              name="plus-circle"
              size={32}
              color="#fff"
              style={styles.addSection}
            />
            {/* </Text> */}
          </TouchableOpacity>
        </View>

        <View style={styles.sectionArea}>
          <View style={styles.line} />
          <TouchableOpacity>
            <TxInRn
              style={styles.headingInput}
              autoCapitalize="sentences"
              placeholder="Section Title..."
              clearButtonMode="while-editing"
              // dense={true}
              // editable={false}
              // multiline={true}
              value={secText}
              // onFocus=
              onChangeText={(t) => secTextHabdle(t)}
            />
            <TxInRn
              style={styles.descInput}
              autoCapitalize="sentences"
              placeholder="Section Description..."
              clearButtonMode="while-editing"
              // editable={false}
              // multiline={true}
              value={secDescText}
              onChangeText={(t) => secDescTextHabdle(t)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderOptionalAnswer = (type) => {
    return (
      <>
        <View style={styles.row}>
          <Text>Optional answer</Text>
          {/* <ImageUpload /> */}
          {removeBtn()}
        </View>
        {addBtn(type)}
      </>
    );
  };

  const renderNonOptionalAnswer = (type) => {
    return (
      <>
        <View style={styles.row}>
          {/* <Text>Non Optional answer</Text> */}
          {(type === "short" && shortComp()) ||
            (type === "long" && longComp()) ||
            (type === "linearScale" && LinearComp()) ||
            (type === "file" && FileComp())}
        </View>
      </>
    );
  };

  // const

  const renderAnswer = (type) => {
    return (
      <>
        {type === "short" ||
        type === "long" ||
        type === "linearScale" ||
        type === "date" ||
        type === "time" ||
        type === "file"
          ? renderNonOptionalAnswer(type)
          : renderOptionalAnswer(type)}
      </>
    );
  };

  const typeWiseRenderAnswers = (type) => {
    console.log(answerTypeSelected);
    return (
      <>
        <View style={styles.line} />
        <View style={styles.ansArea}>
          {/* <Text>{type}</Text> */}

          {renderAnswer(type)}
        </View>
      </>
    );
  };
  // -----------------------------------------------------------------------

  // Answer type selecter component
  const callAnsTypePicker = () => {
    return (
      <AnswerTypePicker
        typeList={ansType}
        sendAnsType={getAnsType.bind(this)}
      />
    );
  };

  // =-------------------SAVE Question Set--------------------------

  const reset = () => {
    setQuestionText("");
    setMediaData({ images: [], videos: [] });
    // setSecText("");
    // setSecDescText("");
  };
  const saveQuestionSet = () => {
    // const qSet = {
    //   sectionNo: props.data.sectionNo,
    //   question: questionText,
    //   mediaAdded: [...mediaData.images],
    //   answerType: answerTypeSelected,
    //   answerOption: [],
    // };

    const qSet = {
      sectionNo: props.data.sectionNo,
      question: questionText,
      mediaAdded: {
        images: [...mediaData.images],
        videos: [...mediaData.videos],
      },
      answerType: answerTypeSelected,
      answerOption: [],
    };
    // console.log("Save btn clicked: data::  ---->  ", qSet);
    props.data.saveData(qSet);
    reset();
  };

  // ============================== Add new section Btn Function+++====================================
  const addNewSection = () => {
    // console.log(secText);
    // console.log(props.data.sectionNo + 1);
    const sectionDetails = {
      sectionNo: props.data.sectionNo + 1,
      sectionTitle: "",
      sectionDescription: "",
    };
    props.data.sectionHandler(sectionDetails);
    // props.data.sectionHandler(props.data.sectionNo + 1);
    setSecText("");
    setSecDescText("");
    reset();
  };

  return (
    <View style={{ marginVertical: 20 }}>
      {sectionHeadingComponent()}

      <View style={styles.area}>
        <Text style={styles.heading}>Add New Question</Text>
        {/* <View style={styles.line} /> */}

        <View style={styles.subArea}>
          {/* <Text style={styles.text}>Question</Text> */}

          {/* -----------------getting QUESTION TEXT--------------------------------------------- */}
          <TextInput
            style={styles.input}
            autoCapitalize="sentences"
            placeholder="Enter your question...."
            multiline={true}
            value={questionText}
            onChangeText={(t) => handleQuestionInput(t)}
          />
          <View>
            {addMediaBtn()}
            {addVideoMediaBtn()}
          </View>
          {/* {addMediaBtn()} */}
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.mediaArea}>
            {/* <Text>Media</Text> */}
            {mediaData.images &&
              mediaData.images.map((image, index) => {
                return (
                  <View style={styles.imageArea} key={index}>
                    <TouchableOpacity
                      // style={{ backgroundColor: "green" }}
                      onPress={() => {
                        selectedImageOption(index);
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
            {mediaData.videos &&
              mediaData.videos.map((video, index) => {
                return (
                  <View style={styles.imageArea} key={index}>
                    {/* {Platform.OS === "web" &&
                !removeMediaWebState &&
                alertCallWeb(index)} */}
                    <TouchableOpacity
                      // style={{ backgroundColor: "green" }}
                      onPress={() => {
                        selectedVideoOption(index);
                      }}
                    >
                      {/* {showVideo()} */}
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

        <View style={styles.line} />

        {/* Answer type picker */}
        <View style={styles.mediaArea}>{callAnsTypePicker()}</View>

        {/* Reander answer Components according to selected answer type */}
        {typeWiseRenderAnswers(answerTypeSelected)}

        <View style={styles.line} />

        {/* /Reset btn---------------------------------------------------------------- */}
        <TouchableOpacity
          style={{
            // backgroundColor: "green",
            alignItems: "baseline",
            justifyContent: "flex-start",
            alignSelf: "baseline",
            left: 20,
            top: 50,
          }}
          onPress={() => {
            reset();
          }}
        >
          <Icon name="undo" size={30} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            saveQuestionSet();
          }}
        >
          <View>
            {/* <Text style={styles.btnText}> */}
            <Icon name="check" size={30} color="#fff" />
            {/* </Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    backgroundColor: "#fff",
    borderRadius: 7,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    // marginBottom: 50,

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
    color: "#aaaadd",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 1,
  },
  text: {
    fontSize: 18,
    color: "#9999ff",
    marginTop: 15,
    marginHorizontal: 10,
  },
  input: {
    margin: 5,
    flex: 1,
  },
  btn: {
    backgroundColor: "#5555dd",
    padding: 10,
    margin: 10,
    borderRadius: 50,
    alignSelf: "center",
    // paddingHorizontal: 10,

    // top: 20,
    // marginVertical: 20,

    elevation: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },

    shadowOpacity: 0.8,
    shadowRadius: 5.49,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#dfdfdf",
    margin: 5,
    marginHorizontal: 10,
  },
  mediaArea: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
  },
  ansArea: {
    flexDirection: "column",
    // alignItems: "center",
    // backgroundColor: "green",
    marginHorizontal: 5,
    // marginTop: 5,
  },
  addAnsBtn: {
    // backgroundColor: "#5555dd",
    // padding: 10,
    margin: 5,
    borderRadius: 50,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    // backgroundColor: "green",
    justifyContent: "space-between",
    alignItems: "center",
  },
  removeBtn: {
    padding: 5,
    margin: 5,
    borderRadius: 30,
    // backgroundColor: "red",
    // flexDirection: "column",
    // justifyContent: "center",
  },
  mdBtn: {
    padding: 5,
    margin: 5,
    borderRadius: 30,
    // backgroundColor: "red",
    // flexDirection: "column",
    // justifyContent: "center",
  },
  subArea: {
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "green",
    justifyContent: "flex-start",
    alignItems: "center",
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
  imageSize: {
    width: Platform.OS === "web" ? 150 : 130,
    height: Platform.OS === "web" ? 150 : 130,
    alignItems: "center",
    justifyContent: "center",
    // margin: 2,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 5,
    // marginTop: 15,
    // backgroundColor: "green",
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
    paddingHorizontal: 12,
    paddingVertical: 4,
    // padding: 4,
  },

  sectionArea: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    // margin: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 20,

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
  upper: {
    backgroundColor: "#fff",
    alignSelf: "baseline",
    marginHorizontal: 10,
    // marginTop: 20,
    paddingHorizontal: 10,
    // paddingVertical: 2,
    borderRadius: 6,
    margin: 2,
    flexDirection: "row",
    alignItems: "center",

    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },

    shadowOpacity: 0.7,
    shadowRadius: 5.49,
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
  addSection: {
    // elevation: 8,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5.49,
    backgroundColor: "#88f",
    paddingHorizontal: 2,
  },

  span: {
    backgroundColor: "#EEC213",
    alignItems: "center",
    borderRadius: 30,
    margin: 5,
  },
  spanText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});
