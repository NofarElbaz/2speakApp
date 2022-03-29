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
    //marginBottom: '60%',

  },
  textStyle2: {
    //fontFamily: "yeuda",
    fontFamily: "verdana",
    color: "black",
    textAlign: "center",
    fontSize :25,
    //height : '5%',
    //width : '50%',
    marginTop : '9%',
    //marginLeft : '25%'
    marginBottom: '30%',

  },
  button: {
    alignItems: 'center',
    top: '10%',
    left: '41%',
    width: '20%',
    height: '80%',
    position: "absolute",
    backgroundColor: "#000000",
    opacity: 0
  },
  image: {
    top: '10%',
    //left: '50%',
    //width: '100%',
    //height: '10',
    //resizeMode: 'contain',
    //paddingTop: 90,
    flex: 1,
    resizeMode: 'contain',

    //tintColor: '#000000',
    width: '100%',
    height: '20%',
    marginBottom: '5%',
    //display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 100,

  },
  icon2Stack: {
    //marginLeft: 60,
    alignItems: 'center',
  }


  
});
