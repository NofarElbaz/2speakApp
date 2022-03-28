import React from "react";
import {StyleSheet,View,Text,Image,TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
//import {HeadLine} from "../components/HeadLine";


const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export const FirstHomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={require("../assets/2speak_logo.png")} 
      />
      <Text style={styles.textStyle1}> ברוכים הבאים</Text>
      <Text style={styles.textStyle2}>לפני שנתחיל</Text>
      <View style={styles.icon2Stack}>
        <Ionicons name="book-outline" size={60} color="#addfd5" />
        <TouchableOpacity
          onPress={() => navigation.navigate("Training")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  textStyle1: {
    //fontFamily: "yeuda-bold",
    fontFamily: "verdana",
    color: "black",
    textAlign: "center",
    fontSize :45,
    marginTop : '27%',
    //marginLeft : '5%'
  },
  textStyle2: {
    //fontFamily: "yeuda",
    fontFamily: "verdana",
    color: "black",
    textAlign: "center",
    fontSize :25,
    //height : '5%',
    //width : '50%',
    marginTop : '10%',
    //marginLeft : '25%'
  },
  button: {//אין שימוש???
    top: '10%',
    left: '0%',
    width: '23%',
    height: '80%',
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  image: {
    //top: '30%',
    //left: '50%',
    //width: '100%',
    //height: '10',
    //resizeMode: 'contain',
    //paddingTop: 90,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginBottom: 100,
  },
  icon2Stack: {
    marginLeft: 60,
    //alignItems: "center"
  }
});
