import { Image,TouchableOpacity } from "react-native";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';

export function WordItem(imageURI,userID,word){
    return(  
        <TouchableOpacity
            onPress={() => navigation.navigate('Recording',{user:userID,wordName:word,image:imageURI})}
            style={TrainingTableStyle.imageButton}>
            <Image
                style={TrainingTableStyle.image} source={{uri: imageURI}}
                resizeMode="cover"
            />
        </TouchableOpacity>
     ) ;
};