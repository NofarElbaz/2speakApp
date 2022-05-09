
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
//screens
import {Home} from "../screens/Home";
import {GuidingVideo} from '../screens/GuidingVideo';
import {TrainingBoard} from '../screens/TrainingBoard';
import { AddCategory } from '../screens/AddCategory';
import { AddWord } from '../screens/AddWord';
import { AllCategorys } from '../screens/AllCategorys';
import {AllWords} from '../screens/AllWords';
import { TranslatingScreen } from '../screens/TranslatingScreen'
import {RecordingScreen} from '../screens/RecordingScreen';
import {RecordingScreen2test} from '../screens/RecordingScreen2test';

//NEED TO DELET - CONVERT TO ALL WORDS
import {FruitsScreen} from '../screens/FruitsScreen';
import {AnimalsScreen} from '../screens/AnimalsScreen';
import {NumbersScreen} from '../screens/NumbersScreen';
import {PronounScreen} from '../screens/PronounScreen';
import {ShapesScreen} from '../screens/ShapesScreen';
import {VegetablesScreen} from '../screens/VegetablesScreen';
import {VehicleScreen} from '../screens/VehiclesScreen';
import {ColorsScreen} from '../screens/ColorsScreen';
import {NounsScreen} from '../screens/NounsScreen';
import {FeelingsScreen} from '../screens/FeelingsScreen';
import {AdjectiveScreen} from '../screens/AdjectiveScreen';
import {BodyPartsScreen} from '../screens/BodyPartsScreen';
import {VerbsScreen} from '../screens/VerbsScreen';
import {QuestionWordsScreen} from '../screens/QuestionWordsScreen';
import {ConjunctionsScreen} from '../screens/ConjunctionsScreen';
import {PrepositionsScreen} from '../screens/PrepositionsScreen';
import {AdverbScreen} from '../screens/Adverb';


const Stack = createNativeStackNavigator();

export const Navigation = () => {

  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstHome">
        <Stack.Screen name = "Home" component={Home} />
        <Stack.Screen name = "Video" component={GuidingVideo} />
        <Stack.Screen name = "Training" component={TrainingBoard} />
        <Stack.Screen name = "AddCategory" component={AddCategory} />
        <Stack.Screen name = "AddWord" component={AddWord} />
        <Stack.Screen name = "AllCategorys" component={AllCategorys} />
        <Stack.Screen name = "AllWords" component={AllWords} />
        <Stack.Screen name = "Trans" component={TranslatingScreen} />
        <Stack.Screen name = "Recording2test" component={RecordingScreen2test} />
        <Stack.Screen name = "Recording" component={RecordingScreen} />


        <Stack.Screen name = "Fruits" component={FruitsScreen} />
        <Stack.Screen name = "Animals" component={AnimalsScreen} />
        <Stack.Screen name = "Numbers" component={NumbersScreen} />
        <Stack.Screen name = "Pronoun" component={PronounScreen} />
        <Stack.Screen name = "Shapes" component={ShapesScreen} />
        <Stack.Screen name = "Vegetables" component={VegetablesScreen} />
        <Stack.Screen name = "Vehicles" component={VehicleScreen} />
        <Stack.Screen name = "Colors" component={ColorsScreen} />
        <Stack.Screen name = "Nouns" component={NounsScreen} />
        <Stack.Screen name = "Feelings" component={FeelingsScreen} />
        <Stack.Screen name = "Adjective" component={AdjectiveScreen} />
        <Stack.Screen name = "BodyParts" component={BodyPartsScreen} />
        <Stack.Screen name = "Verbs" component={VerbsScreen} />
        <Stack.Screen name = "QuestionWords" component={QuestionWordsScreen} />
        <Stack.Screen name = "Conjunctions" component={ConjunctionsScreen} />
        <Stack.Screen name = "Prepositions" component={PrepositionsScreen} />
        <Stack.Screen name = "Adverb" component={AdverbScreen} />
      </Stack.Navigator>
    </NavigationContainer>
);   
};
