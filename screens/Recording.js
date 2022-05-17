import { View, StyleSheet, ToastAndroid ,Image,Pressable ,Text ,Dimensions} from 'react-native';
import { IconButton } from 'react-native-paper';
import React , { useState } from 'react'; 
import { Audio } from 'expo-av';


const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export const Recording = ({ route, navigation }) => {
  const [recordingUri, setRecordingUri] = useState("none");
  const [savedRecordings, setSavedRecordings] = useState(1);
  const [recordingStarted,setRecordingStarted] = useState("false");
  const [recordingStopped , setRecordingStopped] = useState("false");
  const { userID,wordName,categoryName,image} = route.params;
  const [timesPressed, setTimesPressed] = useState(0);

  async function startRecording() {
      //('ישנה הקלטה הממתינה להמשך ביצוע פעולות\nלחיצה על כפתור "וי" - תשמור את ההקלטה\nלחיצה על כפתור "איקס" - תמחוק את ההקלטה\nלחיצה על כפתור "חץ" - תשמיע שוב את ההקלטהל',ToastAndroid.SHORT,ToastAndroid.CENTER);
    
    if(savedRecordings < 11){
      if(recordingUri != 'none'){
        ToastAndroid.showWithGravity //to specify where the toast appears in the screen's layout.
        ('ישנה הקלטה הממתינה להמשך ביצוע פעולות',ToastAndroid.SHORT,ToastAndroid.CENTER);
        //startR()
      } 
      else {
        startR()
      }
    }
    else{
      ToastAndroid.showWithGravity //to specify where the toast appears in the screen's layout.
      ('הקלטת מספיק :) , ניתן לעבור למילה הבאה',ToastAndroid.LONG,ToastAndroid.CENTER);
    }
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
    if(recordingUri != 'none'){
      console.log("play recording...");
      //console.log( recording.getURI());
      //Audio.Sound - This class represents a sound corresponding to an Asset or URL, Returns: A newly constructed instance of Audio.Sound.
      const { sound } = await Audio.Sound.createAsync(
        {uri: recordingUri.getURI() }
      );
      //setRecording(recording);
      console.log("Playing Sound");
      await sound.playAsync();
      ToastAndroid.showWithGravity
      ('ההקלטה בוצעה בהצלחה\nלחיצה על כפתור "וי" - תשמור את ההקלטה\nלחיצה על כפתור "איקס" - תמחוק את ההקלטה\nלחיצה על כפתור "חץ" - תשמיע שוב את ההקלטה',ToastAndroid.LONG,ToastAndroid.CENTER);
    }
  }

  async function playRecordingAgain() {
    if(recordingUri != 'none'){
      console.log("play recording...");
      //console.log( recording.getURI());
      //Audio.Sound - This class represents a sound corresponding to an Asset or URL, Returns: A newly constructed instance of Audio.Sound.
      const { sound } = await Audio.Sound.createAsync(
        {uri: recordingUri.getURI() }
      );
      //setRecording(recording);
      console.log("Playing Sound");
      await sound.playAsync();
      ToastAndroid.showWithGravity
      ('שמיעה חוזרת של ההקלטה האחרונה',ToastAndroid.LONG,ToastAndroid.CENTER);
    }
    else{
      ToastAndroid.showWithGravity
      ('לא ניתן לשמוע הקלטה טרם בוצעה',ToastAndroid.SHORT,ToastAndroid.CENTER);
    }
  }

  function saveRecordingInDB(){
    if(recordingUri != 'none'){
        //add save in DB use {userID,categoryName}
        //לשנות את ההקלטות ששמורות לפי גודל מערך ההקלטות במבנה הנתונים 
        setSavedRecordings(savedRecordings+1)
    
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
/*
  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }
  */

  function printConsole () {
    console.log('Pressable Called.....')
  }

  return (
    <View style = {style.container}>
      <Text style={style.text1}>הקלט את המילה</Text>
      <Text style={style.text2}>{wordName}</Text>
      
      <View style={style.pressableStyle}>
        <Pressable
          
          //Called after onPressOut.
          onPress={() =>{printConsole ()}}

          //Called immediately when a touch is engaged, before onPressOut and onPress.
          onPressIn={() => {
          setTimesPressed(current => current + 1);
          startRecording();
          }}

          //Called when a touch is released.
          onPressOut={()=> {
            if(savedRecordings<11)
            {
              stopRecording ()
              
            }
              }}>
          {({ pressed }) =>
          //if(recordingUri != 'none'){}
           //{recordingUri !== 'none'?<Text>Select a Photo</Text> :
          <Text style={style.button_text}>{pressed && recordingUri === 'none'&&savedRecordings<11 ? 'שחרר כדי לעצור' : 'הקלט'}</Text>}
        </Pressable>
      </View>
      <View style={style.recordIconStack}>
        <IconButton
          icon="refresh"
         // icon="microphone",
          //color={"#addfd5"}
          color={'#64C0B5'}
          size={45}
          onPress={() => playRecordingAgain()}
        />
        <IconButton
          icon="check"
          //color={"#addfd5"}
          color={'#64C0B5'}
          //color={'white'}
          size={45}
          onPress={() => saveRecordingInDB()}
        />
        <IconButton
          icon="close"
          color={'#64C0B5'}
          size={45}
          onPress={() => deleteRecording()}
        />
      </View>
    </View> 
  )
}
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
      padding: 2,
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
      marginTop : '13%',
    },
    text2:{
      fontFamily: "verdana",
      color: "#64C0B5",
      fontWeight: 'bold',
      textAlign: "center",
      fontSize :48,
      marginTop : '7%',
    },
    button_text:{
      fontFamily: "verdana",
      color: "white",
      fontWeight: 'bold',
      textAlign: "center",
      fontSize :18,
    }

});



/*
<View style={style.pressableStyle}>
        
        <Pressable
          
          //Called after onPressOut.
          onPress={() =>{playRecording();}}

          //Called immediately when a touch is engaged, before onPressOut and onPress.
          onPressIn={() => {
          setTimesPressed(current => current + 1);
          startRecording();
          }}
          style={({ pressed }) => [{
            backgroundColor: pressed ? '#64C0B5' : '#64C0B5'},
          ]}

          //Called when a touch is released.
          onPressOut={()=> {
            if(savedRecordings<10)
            {
              stopRecording ()
            }
              }}>
          {({ pressed }) =>
          //if(recordingUri != 'none'){}
          
          <Text style={style.button_text}>{pressed ? 'שחרר כדי לעצור' : 'הקלט'}</Text>}
        </Pressable>
        */