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

// component
import AddQuestion from "./formBuild/addQuestion";
import List from "./formBuild/listing";
import ImagePicker from "./formBuild/ansTypes/imageUpload";
// import ImagePickerWeb from "./formBuild/ansTypes/imageUploadForWeb";

export default function Form(props) {
  const [sectionCounter, SetSectionCounter] = useState(0);

  const [questionList, setQusetionList] = useState({
    questionData: [
      {
        sectionNo: sectionCounter,
        sectionTitle: "",
        sectionDescription: "",
        sectionData: [],
      },
    ],
  });

  // const [sectionList, setSectionList] = useState({
  //   sectionListData: [],
  // });

  // const [test, setTest] = useState({
  //   id: "",
  //   question: "",
  //   answerType: "",
  //   media: [],
  //   sectionIndex: "",
  //   answerOption: [],
  // });

  const handleSection = (value) => {
    console.log(value);

    console.log("Previous Section Index: " + sectionCounter);
    console.log("Current Section Index: " + value.sectionNo);
    SetSectionCounter(value.sectionNo);
    questionList.questionData.push({
      sectionNo: value.sectionNo,
      sectionTitle: value.sectionTitle,
      sectionDescription: value.sectionDescription,

      sectionData: [],
    });
    setQusetionList({ questionData: [...questionList.questionData] });
  };

  const handleQuestionSet = (data) => {
    // console.log(data);

    const questionDataSet = {
      id: uuid.v4(),
      question: data.question,
      answerType: data.answerType,
      media: {
        images: [...data.mediaAdded.images],
        videos: [...data.mediaAdded.videos],
      },
      sectionNo: data.sectionNo,
      answerOption: [...data.answerOption],
    };
    // console.log(data);

    questionList.questionData[data.sectionNo].sectionData.push(questionDataSet);
    setQusetionList({ questionData: [...questionList.questionData] });

    // console.log(questionList);
  };

  //Handle Section Details-------------------------------------------------------
  const handleSecTitle = (title, id) => {
    console.log(title, "   >  ", id);
    questionList.questionData[id].sectionTitle = title;
    setQusetionList({ questionData: [...questionList.questionData] });
  };

  const handleSecDesc = (desc, id) => {
    console.log(desc, "   >  ", id);
    questionList.questionData[id].sectionDescription = desc;
    setQusetionList({ questionData: [...questionList.questionData] });
  };

  // const questionCounter = () => {
  //   return questionList.questionData[sectionCounter].sectionData.length;
  // };

  const callAddQuestion = () => {
    // console.log(" first call : counter : ", sectionCounter);
    // console.log(questionCounter());

    return (
      <AddQuestion
        data={{
          sectionNo: sectionCounter,
          questionCounter:
            questionList.questionData[sectionCounter].sectionData.length,
          // returns -> section details{ add section pressed }
          sectionHandler: handleSection.bind(this),

          // returns -> new question data { save button pressed }
          saveData: handleQuestionSet.bind(this),

          // returns -> handel section title{ when title is editing }
          editSecTitle: handleSecTitle.bind(this),

          // returns -> handel section description { when description is editing }
          editSecDesc: handleSecDesc.bind(this),
        }}
      />
    );
  };

  const handleDelete = (secId) => {
    console.log("SECTION ID DELETE ORDER: ", secId);
    questionList.questionData.splice(secId, 1);
    SetSectionCounter(sectionCounter - 1);
    setQusetionList({ questionData: [...questionList.questionData] });
  };

  const removeItemId = (itemId, secId) => {
    console.log("Item id: " + itemId + "  sec Id:  " + secId);

    // questionList.questionData
    //     setQusetionList({ questionData: [...questionList.questionData] });
  };

  const callList = () => {
    return (
      <List
        data={{
          currentSectionId: sectionCounter,
          sectionList: questionList.questionData,
          sendSectionId: handleDelete.bind(this),
          sendBackItemId: removeItemId.bind(this),
        }}
      />
    );
  };

  return (
    <ScrollView style={styles.scrolling}>
      {/* <Text style={styles.heading}>Form Building Section</Text> */}

      {/* -- Showing listing component --*/}
      {/* <List data={data} /> */}

      {callList()}

      {/* -- Showing Add question Component-- */}
      {/* <AddQuestion /> */}
      {callAddQuestion()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    color: "#5555dd",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 5,
  },

  scrolling: {
    height: "90%",

    // backgroundColor: "green",
  },
});
