import axios from "axios"

const BACKEND_URL = "https://finalproject2speak-default-rtdb.firebaseio.com/"

export function storeWord(userID,data){
    const key = data.category
    axios.set(BACKEND_URL+userID+"/words.json/"+key,
    JSON.stringify(data)
    );
}
export function storeCategory(userID,data){
    axios.post(BACKEND_URL+userID+"/Categories.json",
    JSON.stringify(data)
    );
}

export async function fetchWord(userID){
     const response = await axios.get(BACKEND_URL+userID+"/words.json")
     const words = []
     console.log(response.data)
     for ( const key in response.data){
         wordObj = {
             id: key,
             wordName: response.data[key].wordName,
             category: response.data[key].category,
             image: response.data[key].imageURI,
             records: response.data[key].records
         }
         words.push(wordObj)

     }

     return words
}

export async function fetchCategory(userID){
    const response = await axios.get(BACKEND_URL+userID+"/Categories.json")
    const categoreis = []
    console.log(response.data)
     for ( const key in response.data){
         categoryObj = {
             id: key,
             category: response.data[key].categoryName,
             image: response.data[key].imageURI,
         }
         categoreis.push(categoryObj)
     }

     return categoreis
}