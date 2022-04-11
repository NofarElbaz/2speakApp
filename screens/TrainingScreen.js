import React , {useState} from 'react';
import { Image, View ,TouchableOpacity,ScrollView,SafeAreaView , Button} from 'react-native';
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';

export const  TrainingScreen = ({navigation}) => { 

    
  return (
      <ScrollView style={TrainingTableStyle.ScrollView}>
        <Button title='הוספת קטגוריה' color='#64c0b5' onPress={() => navigation.navigate('AddCategory')} />
      <SafeAreaView style={TrainingTableStyle.container}> 
       <TouchableOpacity
          onPress={() => navigation.navigate('Pronoun')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/pronoun.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Colors')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/color.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Numbers')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/numbers.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Vegetables')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/vegetables.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Fruits')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/fruits.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Shapes')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/shapes.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Animals')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/animals.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Vehicles')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/vehicles.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Verbs')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/verbs.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('QuestionWords')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/questionWords.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Nouns')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/nouns.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Feelings')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/feelings.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Conjunctions')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/conjunctions.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BodyParts')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/bodyParts.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Adjective')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/adjective.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Prepositions')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/prepositions.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Adverb')}
          style={TrainingTableStyle.imageButton}>
          <Image
            style={TrainingTableStyle.image} source={require('../assets/adverb.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </SafeAreaView>
      </ScrollView>


      
    );
  }

  