import {userID} from '../screens/Home'
export const BACKEND_URL = "https://finalproject2speak-default-rtdb.firebaseio.com/"
import { STATIC_CATEGORY } from '../staticData/staticCategoreis'
import {STATIC_WORDS} from '../staticData/staticWords'

export async function existingUser({userID}){

  const response = await fetch(BACKEND_URL+'Users.json',
    {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    const allUsers = await response.json([])
    for(const property in allUsers){
      if(property ==  userID ){
        return true
      }
    }
    return false
}

export function deleteW({word}){
  //delete word from DB

  console.log(word)
  
  fetch(BACKEND_URL+'Users/'+userID+'/words/'+word+'.json',
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
}
export async function deleteCategory({category}){

  //delete category
  fetch(BACKEND_URL+'Users/'+userID+'/categories/'+category+'.json',
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  //delete all words in this category

  const response = await fetch(BACKEND_URL+userID+'/words.json',
  {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })

  const allWords = await response.json([])

  for(const property in allWords){
    if(allWords[property].categoryName == category){
      fetch(BACKEND_URL+'/'+userID+'/words/'+allWords[property].wordName+'.json',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
}


export async function existingWord({word}){

    const response = await fetch(BACKEND_URL+'Users/'+userID+'/words.json',
    {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    const allWords = await response.json([])
    for(const property in allWords){
      if(allWords[property].wordName ==  word ){
      return true
      }
    }
    return false
  
}

export async function existingCategory({categoryName}){

  const response = await fetch(BACKEND_URL+'Users/'+userID+'/categories.json',
  {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  const allCategories = await response.json([])

  for(const property in allCategories){

    if(allCategories[property].categoryName ==  categoryName ){
      return true
    }
  }
  return false
}

export async function getCategoriesData(){

  const response = await fetch(BACKEND_URL+'Users/'+userID+'/categories.json',
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
  return allCategories
}

export async function getWordsData(){

  const response = await fetch(BACKEND_URL+'Users/'+userID+'/words.json',
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
  
  return allwords
}

export function patchNewWord({userID,wordName,categoryName,image}){

    fetch(BACKEND_URL+'Users/'+userID+'/words/'+wordName+'.json',
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

    fetch(BACKEND_URL+'Users/'+userID+'/categories/'+categoryName+'.json',
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

  fetch(BACKEND_URL+'Users/'+userID+'/categories/'+categoryName+'.json',
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

  fetch(BACKEND_URL+'Users/'+userID+'/words/'+wordName+'.json',
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

