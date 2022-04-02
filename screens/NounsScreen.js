import React from 'react';
import { Image, View ,TouchableOpacity,ScrollView} from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';

export const NounsScreen = ({navigation}) => { 
    return (
      <ScrollView style={TrainingTableStyle.ScrollView}>
      <View style={TrainingTableStyle.container}> 
      <HeadLine/>
      <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/girl.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/boy.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/city.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recording')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/table.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }