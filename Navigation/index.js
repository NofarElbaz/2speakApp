import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {FirstHomeScreen} from "../screens/FirstHomeScreen";
import {TrainingScreen} from '../screens/TrainingScreen';
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
import {RecordingScreen} from '../screens/RecordingScreen';
import {AdverbScreen} from '../screens/Adverb';
import {Guide} from '../screens/Guide';
import { AddCategory } from '../screens/AddCategory';


const Stack = createStackNavigator();

export const Navigation = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "FirstHome" component={FirstHomeScreen} />
      <Stack.Screen name = "Training" component={TrainingScreen} />
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
      <Stack.Screen name = "Recording" component={RecordingScreen} />
      <Stack.Screen name = "Adverb" component={AdverbScreen} />
      <Stack.Screen name = "Guide" component={Guide} />
      <Stack.Screen name = "AddCategory" component={AddCategory} />
    </Stack.Navigator>
    </NavigationContainer>
);   
};
