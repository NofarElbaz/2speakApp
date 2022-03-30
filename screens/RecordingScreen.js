
import { View, StyleSheet, ToastAndroid ,Pressable ,Text} from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { IconButton } from 'react-native-paper';
import React , { useState } from 'react'; 
import { Audio } from 'expo-av';

export const RecordingScreen = () => {
  const [recordingUri, setRecordingUri] = useState("none");
  const [savedRecordings, setSavedRecordings] = useState(1);
  const [recordingStarted,setRecordingStarted] = useState("false");
  const [recordingStopped , setRecordingStopped] = useState("false");

  //const [saveRecording , setSaveRecording] = useState("false");

  async function startRecording() {
    //console.log(savedRecordings)
    if(savedRecordings < 10){
      //console.log(recordingUri)
      //console.log(savedRecordings)
      if(recordingUri != 'none'){
        ToastAndroid.showWithGravity
        ('לידיעתך ההקלטה האחרונה שבצעת לא נשמרה במערכת',ToastAndroid.SHORT,ToastAndroid.CENTER);
        startR()
      } 
      else {
        startR()
      }
    }
    else{
      ToastAndroid.showWithGravity
      ('הקלטת מספיק :) , ניתן לעבור למילה הבאה',ToastAndroid.LONG,ToastAndroid.CENTER);
    }
  }

  async function startR(){
    try {
      console.log('Chacking permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      setRecordingStarted("true");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecordingUri(recording);
      console.log('Recording started');
    } 
    catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
      console.log('Stopping recording..');
      //setRecording(recording);
      await recordingUri.stopAndUnloadAsync();
      const uri = recordingUri.getURI(); 
      console.log('Recording stopped and stored at', uri);
      setRecordingStopped("true");
      playRecording()
  }

  async function playRecording() {
    console.log("play recording...");
    //console.log( recording.getURI());
    const { sound } = await Audio.Sound.createAsync(
      {uri: recordingUri.getURI() }
    );
    //setRecording(recording);
    console.log("Playing Sound");
    await sound.playAsync();
    ToastAndroid.showWithGravity
    ('ההקלטה בוצעה בהצלחה\nלחיצה על כפתור אישור תישמור את ההקלטה\nלחיצה על כפתור האשפה תמחוק את ההקלטה',ToastAndroid.LONG,ToastAndroid.CENTER);
  }

  function saveRecordingInDB(){
    if(recordingUri != 'none'){
        setSavedRecordings(savedRecordings+1)
        //add save in mongoDB
        ToastAndroid.showWithGravity
      ('ההקלטה נשמרה',ToastAndroid.SHORT,ToastAndroid.CENTER);
      console.log(savedRecordings)
      setRecordingStarted("false")
      setRecordingStopped("false")
      setRecordingUri('none')
    }
    else{
      ToastAndroid.showWithGravity
      ('לא ניתן לשמור הקלטה טרם בוצעה',ToastAndroid.SHORT,ToastAndroid.CENTER);
    }
  }

  function deleteRecording(){
    if(recordingUri != 'none'){
      ToastAndroid.showWithGravity('ההקלטה נמחקה',ToastAndroid.SHORT,ToastAndroid.CENTER)
      setRecordingStarted("false")
      setRecordingStopped("false")
      setRecordingUri('none')
    }
    else{
      ToastAndroid.showWithGravity('לא ניתן למחוק הקלטה טרם בוצעה',ToastAndroid.SHORT,ToastAndroid.CENTER)
    }
  }

  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style = {style.container}>

      <View style={style.pressableStyle}>

        <Pressable
          onPressIn={() => {
          setTimesPressed(current => current + 1);
          startRecording();
          }}
          style={({ pressed }) => [{
            backgroundColor: pressed ? 'red' : '#addfd5'},
          ]}
          onPressOut={
            ()=> {if(savedRecordings<10){stopRecording ()}}}>
          {({ pressed }) => <Text>{pressed ? 'שחרר כדי להפסיק הקלטה' : 'לחיצה ארוכה להקלטה'}</Text>}
        </Pressable>

      </View>

      <View style={style.recordIconStack}>

        <IconButton
          icon="check"
          color={"#addfd5"}
          size={45}
          onPress={() => saveRecordingInDB()}
        />
        <IconButton
          icon="delete"
          color={"#addfd5"}
          size={45}
          onPress={() => deleteRecording()}
        />
      </View>
      
    </View> 
  )
}

  const style = StyleSheet.create({
    container: {
        flex :1 
    },
    recordIconStack: {
      flex:1,
      justifyContent:'center',
      flexDirection: 'row',
        //marginTop: "60%",
        //marginLeft: "19%",
      
    },
    pressableStyle: {
      flex:1,
      justifyContent:'center'
    }

});

/*

  <IconButton
          icon="record"
          color={"#addfd5"}
          size={45}
          onPress={() => startRecording() }
        />
        <IconButton
          icon="stop"
          color={"#addfd5"}
          size={45}
          onPress={() => stopRecording ()}
        />
          <IconButton 
          icon="play"
          color={"#addfd5"}
          size={45}
          onPress={() => playRecording()}
        />

*/


