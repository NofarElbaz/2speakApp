import React from 'react';
import { Image, View ,TouchableOpacity,ScrollView} from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';

export const AdverbScreen = ({navigation}) => {
  return (
    <ScrollView>
    <View style={TrainingTableStyle.container}> 
    <HeadLine/>
    <TouchableOpacity
        onPress={() => navigation.navigate('Recording')}
        style={TrainingTableStyle.imageButton}>
        <Image
          style={TrainingTableStyle.image} source={require('../assets/yesterday.png')}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Recording')}
        style={TrainingTableStyle.imageButton}>
        <Image
          style={TrainingTableStyle.image} source={require('../assets/very.png')}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Recording')}
        style={TrainingTableStyle.imageButton}>
        <Image
          style={TrainingTableStyle.image} source={require('../assets/fast.png')}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

