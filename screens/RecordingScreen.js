
import { View, StyleSheet } from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { IconButton } from 'react-native-paper';
import React , { useState } from 'react'; 
import { Audio } from 'expo-av';


export const RecordingScreen = () => {
  const [recording, setRecording] = useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    //setRecording(recording);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    console.log('Recording stopped and stored at', uri);
  }

  async function playRecording() {
    console.log("play recording...");
    console.log( recording.getURI());
    const { sound } = await Audio.Sound.createAsync(
      {uri: recording.getURI() }
    );
    //setRecording(recording);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  return (
    <View style = {style.container}>
      <HeadLine/>
      <View style={style.recordIconStack}>
        <IconButton
          icon="record"
          color={"red"}
          size={50}
          onPress={() => startRecording() }
        />
        <IconButton
          icon="stop"
          color={"red"}
          size={50}
          onPress={() => stopRecording ()}
        />
         <IconButton
          icon="play"
          color={"red"}
          size={50}
          onPress={() => playRecording()}
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
        width: 50,
        height: 50,
        position: "absolute",
        //justifyContent:'center',
        marginTop: "60%",
        marginLeft: "19%",
        flexDirection: 'row',
    },
});

