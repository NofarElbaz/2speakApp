import { Image,TouchableOpacity } from "react-native";
import { TrainingTableStyle } from '../Styles/TrainingTableStyle';
import { useNavigation } from "@react-navigation/native";
//
export function WordItem({userID,wordName,categoryName,imageURI}){
    const navigation = useNavigation();
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