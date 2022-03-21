import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import { Dimensions } from 'react-native';
import {HeadLine} from "../components/HeadLine";

const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export const Guide3Screen = (props) => {
  return (
    <View style={styles.container}>
      <HeadLine/>
      <ImageBackground
        source={require("../assets/guide2.png")}
        resizeMode="stretch"
        style={styles.image}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Training")}
          style={styles.button1}>
          <Text style={styles.text}>בוחרים מילה{"\n"}שרוצים להקליט</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: windowW,
    height: (windowH*6)/7
  },
  button1: {
    width: windowW/2.5,
    height: windowH/15,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#F0C421",
    borderRadius: 40,
    marginTop: '95%',
    marginLeft: '45%'
  },
  text: {
    textAlign: "center",
    fontFamily: "yeuda",
    color: "black",
    fontSize: 17,
    marginTop: "5%"

  }
});
