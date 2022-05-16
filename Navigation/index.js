
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
//screens
import {Home} from "../screens/Home";
import {GuidingVideo} from '../screens/GuidingVideo';
import { AddCategory } from '../screens/AddCategory';
import { AddWord } from '../screens/AddWord';
import { AllCategorys } from '../screens/AllCategorys';
import {AllWords} from '../screens/AllWords';
import { TranslatingScreen } from '../screens/TranslatingScreen'
import {Recording} from '../screens/Recording';


const Stack = createNativeStackNavigator();

export const Navigation = () => {

  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstHome">
        <Stack.Screen name = "Home" component={Home} />
        <Stack.Screen name = "Video" component={GuidingVideo} />
        <Stack.Screen name = "AllCategories" component={AllCategorys} />
        <Stack.Screen name = "AddCategory" component={AddCategory} />
        <Stack.Screen name = "AddWord" component={AddWord} />
        <Stack.Screen name = "AllWords" component={AllWords} />
        <Stack.Screen name = "Translate" component={TranslatingScreen} />
        <Stack.Screen name = "Recording" component={Recording} />
      </Stack.Navigator>
    </NavigationContainer>
);   
};
