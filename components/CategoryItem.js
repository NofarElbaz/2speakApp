import { Image,TouchableOpacity } from 'react-native'
import {TrainingTableStyle} from '../Styles/TrainingTableStyle'
import { useNavigation } from '@react-navigation/native';

export function CategoryItem ({categoryName ,imageURI , userID}){
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            onPress={() => navigation.navigate('AllWords',{categoryName:categoryName , user:userID })}
            style={TrainingTableStyle.imageButton}>
                <Image
                    style={TrainingTableStyle.image} source= {{uri: imageURI}}
                    resizeMode="cover"
                />
        </TouchableOpacity>
    )
}