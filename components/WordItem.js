import { Image,TouchableOpacity } from "react-native";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';
import { useNavigation } from "@react-navigation/native";
//
export function WordItem({userID,wordName,categoryName,imageURI}){
    const navigation = useNavigation();
    /*
    console.log("im in WordItem!!!!!!!!!!!!!!!!!!!@#$%^&")
    console.log("USERRRR"+userID)
    console.log("WORDNAME"+wordName)
    console.log("CATEGORYNAME"+categoryName)
    console.log("IMAGEEEEEE"+imageURI)
    */
    return(  
        <TouchableOpacity
            onPress={() => navigation.navigate('Recording',{userID:userID,wordName:wordName,categoryName:categoryName,image:imageURI})}
            style={TrainingTableStyle.imageButton}>
            <Image
                style={TrainingTableStyle.image} source={{uri:imageURI}}
                resizeMode="cover"
            />
        </TouchableOpacity>
     ) ;
};