import React from 'react';
import { Image, View ,TouchableOpacity,ScrollView} from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';

export const QuestionWordsScreen = ({navigation}) => { 
    return (
      <ScrollView>
      <View style={TrainingTableStyle.container}> 
      <HeadLine/>
      <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/how_much.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/what.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/when.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/who.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
  
      </View>
      </ScrollView>
      
    );
  }
