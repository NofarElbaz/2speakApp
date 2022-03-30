import React from "react";
import {StyleSheet,View,Text,Image,TouchableOpacity ,ScrollView,Button} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import {TabNavigation} from '../Navigation/TabNavigation'
//import {HeadLine} from "../components/HeadLine";
//import ButtonNoa from "../components/ButtonNoa";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export const FirstHomeScreen = ({navigation}) => {
  console.log(windowW)
  console.log(windowH)
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image}
        source={require("../assets/2speak_logo.jpg")} />
        <View style={styles.MainButton}>
        <Button title="הקלט"
          onPress={() => navigation.navigate('Training')}
          color='#addfd5'
        />
        </View>
        <View style={styles.MainButton}>
        <Button title="תרגם"
          onPress={() => navigation.navigate('Training')}
          color='#addfd5'
        />
        </View>
        

        <View style={styles.tabNavStyle}>
          <Button title="מדריך"
          onPress={() => navigation.navigate('Guide1')}
          color='#addfd5'/>
          <Button title="לוח אימון"
          onPress={() => navigation.navigate('Training')}
          color='#addfd5'/>
          <Button title="דף הבית"
          onPress={() => navigation.navigate('FirstHome')}
          color='#addfd5'/>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "white",
    alignItems: 'center',
    //justifyContent: 'center',
    //marginHorizontal: 16,
    
  },
  tabNavStyle:{
    //flex :1,
    flexDirection : 'row'
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
    width: windowW*0.3,
    height: windowH*0.07,
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
    resizeMode: 'contain',
    //paddingTop: 90,
    flex: 1,
    resizeMode: 'contain',

    //tintColor: '#000000',
    width: windowW*0.3,
    height: windowH*0.3,
    //marginBottom: windowH*0.03,
    //display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: windowW*0.4,

  },
  icon2Stack: {
    //marginLeft: 60,
    alignItems: 'center',
  }


  
});
