import React from 'react';
import { Image, View ,TouchableOpacity,ScrollView} from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';

export const FruitsScreen = ({navigation}) => { 
    return (
      <ScrollView style={TrainingTableStyle.ScrollView}>
      <View style={TrainingTableStyle.container}> 
      <HeadLine/>
       <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/banana.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/strawberry.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/watermelon.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/apple.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
  
      </View>
      </ScrollView>
      
    );
  };