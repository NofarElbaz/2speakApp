import {ScrollView,SafeAreaView ,Button,Text} from "react-native"
import {CategoryItem} from '../components/CategoryItem'
import {TrainingTableStyle} from '../Styles/TrainingTableStyle'
import {getCategoriesData,getWordsData} from '../DB/DBcommunication'
import { useState,useEffect } from 'react';
import {WordItem} from '../components/WordItem'

function renderCategoryItem({category , user} ){

    return <CategoryItem key={category.categoryName} categoryName = {category.categoryName} imageURI={category.imageURI} userID={user}/>
}
function renderFreeWordItem({wordDetails,user} ){

    if(wordDetails.categoryName == 'none'){

        return <WordItem key={wordDetails.wordName} userID = {user} wordName = {wordDetails.wordName} categoryName={wordDetails.categoryName} imageURI={wordDetails.imageURI} />
    }
}


export function AllCategorys ({route,navigation}) {
    const {STATIC_CATEGORY,userID } = route.params;
    const [catArr,setCatArr] = useState([]);
    const [wordArr,setWordArr] = useState([]);
    const [allCategories,setAllCategories] = useState({});
    const [allWords,setAllWords] = useState({});


    const catData = async () => {
        const allCat =  await getCategoriesData();
        setAllCategories(allCat)
    }
    
    const wordData = async () => {
        const allWords = await getWordsData();
        setAllWords(allWords)
    }

    useEffect(()=>{ 
    catData()
    let Carr=[]
    for(const property in allCategories){
        // console.log(property)
        let doc={
            categoryName:allCategories[property].categoryName,
            imageURI:allCategories[property].imageURI
        }
        Carr.push(doc)
    }
    setCatArr(Carr)
    },[allCategories])

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
    },[allWords])
        
    

    return(
        <ScrollView style={TrainingTableStyle.ScrollView}>
            <Button title='הוספת מילה' color='#64c0b5' onPress={() => navigation.navigate('AddWord',{userID: userID, categoryName:"none"})} />
            <Button title='הוספת קטגוריה' color='#64c0b5' onPress={() =>navigation.navigate('AddCategory',{userID: userID})} />
            <SafeAreaView style={TrainingTableStyle.container}> 

            {catArr ? catArr.map((cat) => renderCategoryItem({category:cat,user:userID})): <Text>test</Text>}
            {wordArr ? wordArr.map((word) => renderFreeWordItem({wordDetails:word,user:userID})): <Text>test</Text>}

            </SafeAreaView>
        </ScrollView>

    )
}

