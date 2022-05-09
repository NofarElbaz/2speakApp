import { Image,TouchableOpacity } from 'react-native'

export function CategorItem (navigation , category , userID , imageURI){
    return(
        <TouchableOpacity
            onPress={() => navigation.navigate('AllWords',{category : category , user: userID })}
            style={TrainingTableStyle.imageButton}>
                <Image
                    style={TrainingTableStyle.image} source={require(imageURI)}
                    resizeMode="cover"
                />
        </TouchableOpacity>
    )
}