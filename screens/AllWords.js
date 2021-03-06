import React , {useState,useEffect} from 'react';
import { View,ScrollView,Button} from 'react-native';
import { WordItem } from '../components/WordItem';
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';
import {getWordsData, deleteCategory} from '../DB/DBcommunication'


export function renderWordItem({wordDetails,user,category} ){

    if(wordDetails.categoryName == category){
      
        return <WordItem key={wordDetails.wordName} userID = {user} wordName = {wordDetails.wordName} categoryName={wordDetails.categoryName} imageURI={wordDetails.imageURI} />
    }
}


export const AllWords = ({route,navigation}) => {
    const {categoryName,user } = route.params;
    const [allWords,setAllWords] = useState({});
    const [wordArr,setWordArr] = useState([]);

    const wordData = async () => {
        const allWords = await getWordsData();
        setAllWords(allWords)
    }
    useEffect(()=>{ 
        wordData()
        let Warr=[]
        
        for(const property in allWords){
            // console.log(property)
            let doc={
                categoryName:allWords[property].categoryName,
                imageURI:allWords[property].imageURI,
                wordName:allWords[property].wordName
            }
            Warr.push(doc)
        }
        setWordArr(Warr)
        return () => {
            Warr=[]
            doc={}
        }
    },[allWords])

    function deleteCat(){
        deleteCategory({category:categoryName})
        navigation.navigate('AllCategories',{userID: user})
    }

    return(
        <ScrollView style={TrainingTableStyle.ScrollView}>
            <Button title='מחיקת קטגוריה' color='red' onPress={deleteCat} />
            <Button title='הוספת מילה' color='#64c0b5' onPress={() => navigation.navigate('AddWord',{userID: user, categoryName:categoryName})} />
            <View style={TrainingTableStyle.container}> 

            {wordArr ? wordArr.map((word) => renderWordItem({wordDetails:word,user:user,category:categoryName})): <Text>test</Text>}
    
            </View>
        </ScrollView>
    )

}