import React from "react";
import {StyleSheet,View,ImageBackground,TouchableOpacity,Text} from "react-native";
import {HeadLine} from "../components/HeadLine";
import { Dimensions } from 'react-native';

const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export const Guide2Screen = (props) => {
  return (
    <View style={styles.container}>
      <HeadLine/>
      <ImageBackground
        source={require("../assets/guide1.png")}
        resizeMode="stretch"
        style={styles.image}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Guide3")}
          style={styles.button}>
          <Text style={styles.text}>בוחרים קטגוריה</Text>
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
    //width: windowW,
    //height: (windowH*6)/7,
    width: "100%",
    height: "100%",
  },
  button: {
    //flex: 0.3,
    width: windowW/2.2,
    //height: windowH/15,
    //width: "50%",
    height: "5%",
    backgroundColor: "white",
    borderWidth: 4, //Frame thickness
    borderColor: "#F0C421",
    borderRadius: 40,
    marginTop: '90%',
    marginLeft: '45%',
    textAlign: "center",
    //margin: '50%',
    //alignItems:'center',
    //justifyContent:'center',
    padding: 3,
    
  },
  text: {
    fontFamily: "yeuda",
    textAlign: "center",
    color: "black",
    fontSize: 22,
    marginTop: "3%",
    //fontWeight: "bold"
  }
});
