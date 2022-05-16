import { View, StyleSheet, ToastAndroid ,Image,Pressable ,Text ,Dimensions,Alert} from 'react-native';
import { IconButton } from 'react-native-paper';
import React , { useState } from 'react'; 
import { Audio } from 'expo-av';

const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export const TranslatingScreen = () => {
  const [recordingUri, setRecordingUri] = useState("none");
  const [savedRecordings, setSavedRecordings] = useState(1);
  const [recordingStarted,setRecordingStarted] = useState("false");
  const [recordingStopped , setRecordingStopped] = useState("false");

  //const [saveRecording , setSaveRecording] = useState("false");


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
    //Audio.Sound - This class represents a sound corresponding to an Asset or URL, Returns: A newly constructed instance of Audio.Sound.
    const { sound } = await Audio.Sound.createAsync(
      {uri: recordingUri.getURI() }
    );
    //setRecording(recording);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  function printConsole () {
    console.log('Pressable Called.....')
    Alert.alert('Pressable Called.....')
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
        <Text style={style.text1}>התחל הקלטה</Text>
        <View style={style.pressableStyle}>
        <Pressable
            //Called after onPressOut.
            onPress={() =>{printConsole();}}

            //Called immediately when a touch is engaged, before onPressOut and onPress.
            onPressIn={() => {
                setTimesPressed(current => current + 1);
                startR();
            }}
            style={({ pressed }) => [{
                backgroundColor: pressed ? '#64C0B5' : '#64C0B5'},
                //style.wrapperCustom
            ]}

            //Called when a touch is released.
            onPressOut={
                ()=> {if(savedRecordings<10){stopRecording ()}
            }}>
            {({ pressed }) => <Text style={style.button_text}>{pressed ? 'שחרר כדי לעצור' : 'הקלט'}</Text>}
        </Pressable>   
        
          
        </View> 
    </View> 
  )}
  const style = StyleSheet.create({
    container: {
        //backgroundColor: 'white',
        backgroundColor:'#E4FAF5',
        flex :1
    },
    recordIconStack: {
      flex:1,
      justifyContent:'center',
      flexDirection: 'row',
      marginTop: "15%",
      //marginLeft: "19%",
      //flexDirection:'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
    
    },
    pressableStyle: {
      borderRadius: 100,
      marginTop: "70%",
      padding: 3,
      height: windowH/6.8,
      width: windowW/3.5,
      //justifyContent: 'flex-end',
      justifyContent:'center',
      alignItems: 'center',
      elevation: 15,
      borderWidth: 2, //Frame thickness
      //borderColor: "#cde8e1",
      //color:"#64C0B5",
      //borderColor: "#64C0B5",
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
      fontSize :40,
      marginTop : '20%'
      //marginBottom: '60%',
    },
    text2:{
      fontFamily: "verdana",
      color: "#64C0B5",
      fontWeight: 'bold',
      textAlign: "center",
      fontSize :45,
      marginTop : '7%'
      //marginBottom: '60%',
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
