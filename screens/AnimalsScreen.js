import React from 'react';
import { Image, View ,TouchableOpacity,ScrollView} from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';

export const AnimalsScreen = ({navigation}) => {
  return (
    <ScrollView>
    <View style={TrainingTableStyle.container}>
    <HeadLine/> 
   <TouchableOpacity
      onPress={() => navigation.navigate('Recording')}
      style={TrainingTableStyle.imageButton}>
      <Image
        style={TrainingTableStyle.image} source={require('../assets/elephant.png')}
        resizeMode="cover"
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('Recording')}
      style={TrainingTableStyle.imageButton}>
      <Image
        style={TrainingTableStyle.image} source={require('../assets/cat.png')}
        resizeMode="cover"
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('Recording')}
      style={TrainingTableStyle.imageButton}>
      <Image
        style={TrainingTableStyle.image} source={require('../assets/dog.png')}
        resizeMode="cover"
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('Recording')}
      style={TrainingTableStyle.imageButton}>
      <Image
        style={TrainingTableStyle.image} source={require('../assets/lion.png')}
        resizeMode="cover"
      />
    </TouchableOpacity>
  </View>
  </ScrollView>
  );
};


