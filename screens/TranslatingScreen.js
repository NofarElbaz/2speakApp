import { View, StyleSheet, ToastAndroid ,Image,Pressable ,Text ,Dimensions,Alert} from 'react-native';
import React , { useState } from 'react'; 
import { Audio } from 'expo-av';
//import { SpeechSDK } from 'microsoft-cognitiveservices-speech-sdk'

const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

//var sdk = require("microsoft-cognitiveservices-speech-sdk");
/*
var config = SpeechSDK.SpeechConfig.fromSubscription("6f04f45f094c4662a4aa86b3a305177a", "uaenorth");
config.endpointId = "c7b69f64-bac8-4ab6-bc32-06d76e42596e";
var reco = new SpeechSDK.SpeechRecognizer(config);
*/

export const TranslatingScreen = () => {
  const [recording, setRecording] = useState("none");
  const [savedRecordings, setSavedRecordings] = useState(1);
  const [recordingStarted,setRecordingStarted] = useState("false");
  const [recordingStopped , setRecordingStopped] = useState("false");
  const [timesPressed, setTimesPressed] = useState(0);
  //const [sound , setSound ] = useState("");

  async function stopRecording() {
    //connect with model and return the text
      console.log('Stopping recording..');
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI(); 
      console.log('Recording stopped and stored at', uri);
      setRecordingStopped("true");
      playRecording()
      /*
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/cat(1).wav')
      );
      setSound(sound);
      printWord(sound)
      */
  }


  function printWord(record){
    console.log("hereeeeeeeeee: "+ reco +"record Path:"+record)
    word = (reco(record)).toString()
    Alert.alert(word)
  }

  async function startR(){
    try {
      console.log('Chacking permissions..');
      await Audio.requestPermissionsAsync();//Request recording permissions - Asks the user to grant permissions for audio recording.
      await Audio.setAudioModeAsync({ //expo provide this API to customize the audio experience on iOS and Android.
        allowsRecordingIOS: true,//ios??? // a boolean selecting if recording is enabled on iOS.
        playsInSilentModeIOS: true,//a boolean selecting if your experience's audio should play in silent mode on iOS, defaults = false.
      }); 
      console.log('Starting recording..');
      setRecordingStarted("true");
      //Audio.Recording - This class represents an audio recording, Returns : A newly constructed instance of Audio.Recording.
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY //RecordingOptions- extension: '.m4a',
      );
      setRecording(recording);
    } 
    catch (err) {
      console.error('Failed to start recording', err);
    }
  }


  async function playRecording() {
    console.log("play recording...");
    //Audio.Sound - This class represents a sound corresponding to an Asset or URL, Returns: A newly constructed instance of Audio.Sound.
    const { sound } = await Audio.Sound.createAsync(
      {uri: recording.getURI() }
    );
    //setRecording(recording);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style = {style.container}>
        <Text style={style.text1}>התחל הקלטה</Text>
        <View style={style.pressableStyle}>
        <Pressable
            //Called immediately when a touch is engaged, before onPressOut and onPress.
            onPressIn={() => {
                setTimesPressed(current => current + 1);
                startR();
            }}
            style={({ pressed }) => [{
                backgroundColor: pressed ? 'red' : '#64C0B5'},
                //style.wrapperCustom
            ]}
            //Called when a touch is released.
            onPressOut={
              stopRecording}
            >
            {({ pressed }) => <Text style={style.button_text}>{pressed ? 'הקלט' : 'הקלט'}</Text>}
        </Pressable>  
        </View> 
    </View> 
  )}
  const style = StyleSheet.create({
    container: {
        backgroundColor:'#E4FAF5',
        flex :1
    },
    recordIconStack: {
      flex:1,
      justifyContent:'center',
      flexDirection: 'row',
      marginTop: "15%",
      justifyContent: 'space-between',
      marginHorizontal: 30,
    
    },
    pressableStyle: {
      borderRadius: 100,
      marginTop: "20%",
      padding: 3,
      height: windowH/6.8,
      width: windowW/3.5,
      justifyContent:'center',
      alignItems: 'center',
      elevation: 15,
      borderWidth: 2, //Frame thickness
      borderColor: "white", 
      backgroundColor:"#64C0B5",
      marginLeft: windowW/2.7,
      textAlign: "center",
    },
    text1:{
      fontFamily: "verdana",
      color: "#64C0B5",
      fontWeight: 'bold',
      textAlign: "center",
      fontSize :30,
      marginTop : '40%'
    },
    text2:{
      fontFamily: "verdana",
      color: "#64C0B5",
      fontWeight: 'bold',
      textAlign: "center",
      fontSize :45,
      marginTop : '7%'
    },
    button_text:{
        fontFamily: "verdana",
        color: "white",
        fontWeight: 'bold',
        textAlign: "center",
        fontSize :18,
    },
    button: {
        width: 40,
        height: 44,
        position: "absolute",
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
        marginTop : '7%'
    }

});
