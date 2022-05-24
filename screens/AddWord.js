
import React, {useState} from 'react';
import { StyleSheet, View, TextInput , Button, Image , ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { patchNewWord , existingWord} from '../DB/DBcommunication';

export function AddWord ({route,navigation}){
  const { userID, categoryName } = route.params;
  const [image, setImage] = useState(null); //image URI
  const [text, onChangeText] = React.useState("Useless Text");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  async function saveWord(){

    if(text != "Useless Text" && text != ""){
      if(image != null){
        const exist =  await existingWord({word:text})
        if(exist){
          ToastAndroid.showWithGravity
          ('מילה זו קיימת במערכת',ToastAndroid.SHORT,ToastAndroid.CENTER);
        }
        else{
          console.log("new Wordddddddddddddddd!!!!!!")
          patchNewWord({userID:userID,wordName:text,categoryName:categoryName,image:image})
          navigation.navigate("AllCategories",{userID})
        }
      }
      else{
        ToastAndroid.showWithGravity
        ('יש לבחור תמונה',ToastAndroid.SHORT,ToastAndroid.CENTER);
        return 1
      }
    }
    else{
      ToastAndroid.showWithGravity
    ('יש להקליד מילה',ToastAndroid.SHORT,ToastAndroid.CENTER);
    return 1
    }
  }  
  

  return(
    <View style={styles.container}>
      <View style={styles.textContainer} >
        <TextInput style={styles.textStyle}
            placeholder='הקלד מילה...'
            onChangeText={onChangeText}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="העלאת תמונה מהמכשיר" onPress={pickImage} color="#64c0b5" />
      </View>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button title="הוסף מילה"  onPress={saveWord} color="#8ad2c6"/>

    </View>    
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E4FAF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer:{
    flexDirection:'row',
    paddingBottom: 20,
  },
  textStyle:{
    borderWidth:2,
    borderColor:"#64c0b5",
    width:'50%',
  },
  buttonStyle:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20
  }

})