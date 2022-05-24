
import React from "react";
import {StyleSheet,View,Button,ImageBackground,Dimensions} from "react-native";
import * as Application from 'expo-application';
import {STATIC_CATEGORY} from '../staticData/staticCategoreis'
import {postCategoreis,postWords,existingUser} from "../DB/DBcommunication";

export const userID = Application.androidId
console.log("run on deviceID:" ,userID)
const windowH = Dimensions.get('window').height;


export const Home = ({navigation}) => {
  
  async function saveSystemDataOnDB(){
    //once user open this aplication - all system data save below user's collection in DB
    exist = await existingUser({userID:userID})
    if(!exist){
      postCategoreis()
      postWords()
    }    
    navigation.navigate('AllCategories',{STATIC_CATEGORY,userID})
  }
  

  return (
    <View style = {styles.container}>
      <ImageBackground source={require('../assets/homeScreenBackground.png')} style={styles.image}>
        <View style={styles.Buttons}>
        <Button title="מדריך"
          onPress={() => navigation.navigate('Video')}
          color='#64C0B5'/>
          <Button title="לוח אימון"
          onPress={saveSystemDataOnDB}
          //onPress={() => navigation.navigate("Training")}
          color='#64C0B5'/>
        <Button title="תרגום"
          onPress={() => navigation.navigate('Translate')}
          color='#64C0B5'/>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  image:{
    flex:1,
    resizeMode:'cover',
  },
  Buttons: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: windowH/1.3
  },

})