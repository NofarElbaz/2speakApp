
import {StyleSheet, View ,Button, Text} from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { IconButton } from 'react-native-paper';
import React , { useState, useEffect } from 'react'; 
import Voice, {
  SpeechResultsEvent,
  SpeechErrorEvent,
} from "@react-native-voice/voice";


export const RecordingScreen = () => {

  const [results, setResults] = useState([]);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    function onSpeechResults(e) {
      setResults(e.value ?? []);
    }
    function onSpeechError(e) {
      console.error(e);
    }
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    return function cleanup() {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  async function toggleListening() {
    try {
      if (isListening) {
        await Voice.stop();
        setIsListening(false);
      } else {
        setResults([]);
        await Voice.start("he-IL");
        setIsListening(true);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Press the button and start speaking.</Text>
      <Button
        title={isListening ? "Stop Recognizing" : "Start Recognizing"}
        onPress={toggleListening}
      />
      <Text>Results:</Text>
      {results.map((result, index) => {
        return <Text key={`result-${index}`}>{result}</Text>;
      })}
    </View>
  );
/*
    return (
      <View style = {style.container}>
        <HeadLine/>
        <View style={style.recordIconStack}>
          <IconButton
              icon="record"
              color={"red"}
              size={50}
              onPress={() => console.log("start record")}
          />
          <IconButton
              icon="stop"
              color={"red"}
              size={50}
              onPress={() => console.log("stop record")}
          />
          <IconButton
            icon="play"
            color={"red"}
            size={50}
            onPress={() => console.log("play record")}
          />
        </View> 
      </View> 
    )

  */
}

/*
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

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

