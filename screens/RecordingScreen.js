
import { View, StyleSheet, ToastAndroid} from 'react-native';
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
    if(recordingStarted == "false" && savedRecordings < 10){
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
    else{
      ToastAndroid.showWithGravity
      ('ישנה הקלטה במערכת במחכה לאישור\nבחר אם למחוק או לשמור אותה\nורק לאחר מכן תוכל להקליט שוב',ToastAndroid.LONG,ToastAndroid.CENTER);
    }
  }

  async function stopRecording() {
    if(recordingStarted == "true"){
      console.log('Stopping recording..');
      //setRecording(recording);
      await recordingUri.stopAndUnloadAsync();
      const uri = recordingUri.getURI(); 
      console.log('Recording stopped and stored at', uri);
      setRecordingStopped("true");
    }
    else{
      ToastAndroid.showWithGravity
      ('קודם עליך לבצע הקלטה!',ToastAndroid.LONG,ToastAndroid.CENTER);

    }
  }

  function saveRecordingInDB(){
    if(recordingStarted == "true" && recordingStopped =="true"){
      if(savedRecordings < 10){
        setSavedRecordings(savedRecordings+1)
        //add save in mongoDB
        ToastAndroid.showWithGravity
      ('ההקלטה שלך נשמרה בהצלחה',ToastAndroid.LONG,ToastAndroid.CENTER);
      }
      console.log(savedRecordings)
      console.log(saveRecording)
      setRecordingStarted("false")
      setRecordingStopped("false")
    }
    else{
      ToastAndroid.showWithGravity
      ('קודם עליך לבצע הקלטה!',ToastAndroid.LONG,ToastAndroid.CENTER);
    }

  }

  async function playRecording() {
    if(recordingStarted == "true" && recordingStopped =="true"){
    console.log("play recording...");
    //console.log( recording.getURI());
    const { sound } = await Audio.Sound.createAsync(
      {uri: recordingUri.getURI() }
    );
    //setRecording(recording);
    console.log("Playing Sound");
    await sound.playAsync();
    ToastAndroid.showWithGravity
    ('ההקלטה בוצעה בהצלחה\nכדי לשמור אותה יש ללחוץ על הV',ToastAndroid.LONG,ToastAndroid.CENTER);
    }
    else{
      ToastAndroid.showWithGravity
      ('קודם עליך לבצע הקלטה!',ToastAndroid.LONG,ToastAndroid.CENTER)
    }
  }

  function deleteRecording(){
    if(recordingStarted == "true" && recordingStopped =="true"){
      ToastAndroid.showWithGravity('ההקלטה נמחקה',ToastAndroid.LONG,ToastAndroid.CENTER)
      setRecordingStarted("false")
      setRecordingStopped("false")
    }
    else{
      ToastAndroid.showWithGravity('לא ניתן למחוק הקלטה טרם בוצעה',ToastAndroid.LONG,ToastAndroid.CENTER)
    }
  }

  return (
    <View style = {style.container}>
      <HeadLine/>
      <View style={style.recordIconStack}>
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
        //marginTop: "60%",
        //marginLeft: "19%",
      flexDirection: 'row',
    },
});


