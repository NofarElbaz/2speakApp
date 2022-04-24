import React from 'react';
import { Image, View ,TouchableOpacity,ScrollView} from 'react-native';
import {HeadLine} from "../components/HeadLine";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';
//realm
import {Word , useQuery , useRealm} from '../mongoDB/Word'


export const AnimalsScreen = ({navigation}) => {
  const realm = useRealm()
  function addToDB (mila,image){
    console.log(mila,image)
    let newWord = new Word(mila,image)
    realm.write(()=> {
      realm.create("Word",{_id: newWord._id , name: 'elephant' ,imageURI: '../assets/elephant.png'})
    })
    console.log(realm.objects("Word"))
  }

  return (
    <ScrollView style={TrainingTableStyle.ScrollView}>
    <View style={TrainingTableStyle.container}>
    <HeadLine/> 
   <TouchableOpacity
      onPress={() => {addToDB('elephant','../assets/elephant.png');navigation.navigate('Recording')}}
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


