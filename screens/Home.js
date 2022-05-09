
import React from "react";
import {StyleSheet,View,Button,ImageBackground,Dimensions} from "react-native";

const windowH = Dimensions.get('window').height;

export const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <ImageBackground source={require('../assets/homeScreenBackground.png')} style={styles.image}>
        <View style={styles.Buttons}>
        <Button title="מדריך"
          onPress={() => navigation.navigate('Video')}
          color='#64C0B5'/>
          <Button title="לוח אימון"
          onPress={() => navigation.navigate('Training')}
          color='#64C0B5'/>
        <Button title="תרגום"
          onPress={() => navigation.navigate('Trans')}
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