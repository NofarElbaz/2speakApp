import {userID} from '../screens/Home'
export const BACKEND_URL = "https://finalproject2speak-default-rtdb.firebaseio.com/"
import { STATIC_CATEGORY } from '../staticData/staticCategoreis'
import {STATIC_WORDS} from '../staticData/staticWords'

export async function getCategoriesData(){

  const response = await fetch(BACKEND_URL+userID+'/categories.json',
  {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })

  const allCategories = await response.json([])
  if(!response.ok){
      console.log("load data from DB fails")
  }
  else{
      //console.log(allCategories)
      //console.log('-------------------------------')
  }
  return allCategories
}

export async function getWordsData(){

  const response = await fetch(BACKEND_URL+userID+'/words.json',
  {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })

  const allwords = await response.json([])
  if(!response.ok){
      console.log("load data from DB fails")
  }
  else{
      //console.log(allCategories)
      //console.log('-------------------------------')
  }
  return allwords
}

export function patchNewWord({userID,wordName,categoryName,image}){

    fetch(BACKEND_URL+'/'+userID+'/words/'+wordName+'.json',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        wordName: wordName,
        categoryName: categoryName,
        imageURI: image ,
        records: {}
      })
    })
}

export function patchNewCategory({userID,categoryName,image}){

    fetch(BACKEND_URL+'/'+userID+'/categories/'+categoryName+'.json',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        categoryName: categoryName,
        imageURI: image,
      })
    })
}

export function postCategoreis(){
   
  for(let i=0; i<STATIC_CATEGORY.length;i++){
      postCatDB({categoryName:STATIC_CATEGORY[i].category,imageURI:STATIC_CATEGORY[i].image})
  }
}
export function postWords(){
 
  for(let i=0; i<STATIC_WORDS.length;i++){
      postWordDB({categoryName:STATIC_WORDS[i].category,imageURI:STATIC_WORDS[i].image,wordName:STATIC_WORDS[i].word})
  }
}


function postCatDB({categoryName,imageURI}){

  fetch(BACKEND_URL+'/'+userID+'/categories/'+categoryName+'.json',
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      categoryName: categoryName,
      imageURI: imageURI ,
    })
  })
}

function postWordDB({categoryName,imageURI,wordName}){

  fetch(BACKEND_URL+'/'+userID+'/words/'+wordName+'.json',
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      wordName: wordName,
      categoryName: categoryName,
      imageURI: imageURI ,
      records: {}
    })
  })
}
