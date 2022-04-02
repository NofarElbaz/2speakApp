import React from "react";
import {StyleSheet,View,Button,ImageBackground} from "react-native";
//import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';


const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export const FirstHomeScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <ImageBackground source={require('../assets/homeScreenBackground.png')} style={styles.image}>
        <View style={styles.Buttons}>
        <Button title="מדריך"
          onPress={() => navigation.navigate('Guide1')}
          color='#64C0B5'/>
          <Button title="לוח אימון"
          onPress={() => navigation.navigate('Training')}
          color='#64C0B5'/>
        <Button title="תרגום"
          onPress={() => navigation.navigate('FirstHome')}
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



/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'row',
    //backgroundColor: "white",
    //alignItems: 'center',
    //justifyContent: 'center',
    //marginHorizontal: 16, 
  },
  tabNavStyle:{
    //flex :1,
    flexDirection : 'row',
    marginTop : '48%',
    //width: '50%',
  },
  textStyle1: {
    fontFamily: "verdana",
    color: "black",
    textAlign: "center",
    fontSize :45,
    //marginTop : '27%',
    //marginBottom: '60%',

  },
  textStyle2: {
    fontFamily: "verdana",
    color: "black",
    textAlign: "center",
    fontSize :25,
    //height : '5%',
    //width : '50%',
    marginTop : '9%',
    //marginLeft : '25%'
    marginBottom: '10%',

  },
  buttonIcon: {
    alignItems: 'center',
    top: '10%',
    left: '41%',
    width: '20%',
    height: '80%',
    position: "absolute",
    backgroundColor: "#000000",
    opacity: 0
  },
  MainButton: {
    //alignItems: 'center',
    //width: windowW*0.3,
    //height: windowH*0.07,
    //backgroundColor: "#addfd5",
    //position: "absolute",
    //borderRadius: 30,
    //marginRight: 40,
    //marginLeft: 40,
    marginTop: 10,
    //paddingTop: 20,
    //paddingBottom: 20,
    //backgroundColor: '#68a0cf',
    //borderRadius: 10,
    //borderWidth: 1,
    justifyContent: 'space-around',
    //flexDirection : 'row',
    textAlign:'center',
    //fontWeight: 'bold',
    overflow: 'hidden',
    
    
  },
  image: {
    //top: '10%',
    //left: '50%',
    //width: '100%',
    //height: '10',
    resizeMode: 'cover',
    //paddingTop: 90,
    flex: 1,
    //resizeMode: 'contain',

    //tintColor: '#000000',
    //width: windowW*0.3,
    //height: windowH*0.3,
    //marginBottom: windowH*0.03,
    //display: 'flex',
    //justifyContent: 'center',
    //alignItems: 'center',
    //borderWidth: windowW*0.4,

  },
  icon2Stack: {
    //marginLeft: 60,
    alignItems: 'center',
  }  
});


*/