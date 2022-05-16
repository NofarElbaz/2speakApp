import React from 'react';
import { View,ScrollView,Button} from 'react-native';
import { WordItem } from '../components/WordItem';
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';
import {STATIC_WORDS} from '../staticData/staticWords'


function renderWordItem({wordDetails,user,category} ){

    if(wordDetails.category == category){
        /*
        console.log("im in renderWordItem!!!!!!!!!!!!!!!!!!!@#$%^&")
        console.log("category:" + wordDetails.category)
        console.log("image:"+wordDetails.image)
        console.log("user:"+user)
        console.log("word name:"+ wordDetails.word)
        */
        return <WordItem key={wordDetails.word} userID = {user} wordName = {wordDetails.word} categoryName={wordDetails.category} imageURI={wordDetails.image} />
    }
}


export const AllWords = ({route,navigation}) => {
    const {categoryName,user } = route.params;
    //console.log("in AllWords. user:"+user)
    return(
        <ScrollView style={TrainingTableStyle.ScrollView}>
             <Button title='הוספת מילה' color='#64c0b5' onPress={() => navigation.navigate('AddWord')} />
            <View style={TrainingTableStyle.container}> 

                {STATIC_WORDS.map((word) => renderWordItem({wordDetails:word,user:user,category:categoryName}))}
    
            </View>
        </ScrollView>
    )

}