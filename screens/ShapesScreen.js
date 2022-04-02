import React from 'react';
import { Image, View ,TouchableOpacity,ScrollView} from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';

export const ShapesScreen = ({navigation}) => { 
    return (
      <ScrollView style={TrainingTableStyle.ScrollView}>
      <View style={TrainingTableStyle.container}> 
      <HeadLine/>
       <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/circle.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/triangular.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/square.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
  
      </View>
      </ScrollView>
      
    );
  }
