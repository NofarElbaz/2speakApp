import * as React from 'react';
import {TrainingScreen} from '../screens/TrainingScreen';
import {Guide1Screen} from '../screens/Guide1Screen';
import {FirstHomeScreen} from "../screens/FirstHomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export const TabNevigation = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name = "Home" component={FirstHomeScreen} />
        <Stack.Screen name = "Guide" component={Guide1Screen} />
        <Stack.Screen name = "Traning" component={TrainingScreen} />
    </Stack.Navigator>
    </NavigationContainer>
);   
};