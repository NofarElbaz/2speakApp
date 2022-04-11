import React, {useState} from 'react';
import { StyleSheet, View, TextInput , Button, Image ,KeyboardAvoidingView, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export const AddCategory = () => {

  const [image, setImage] = useState(null);
  const [text, onChangeText] = React.useState("Useless Text");
  const [imageUri , setImageUri] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  function categoryInputHandler(categoryInput){
    //שינוי מצב בהתאם לקלט כדי שישמר קלט סופי

  }

  return(
    <View style={styles.container}>
      <View style={styles.textContainer} >
        <TextInput style={styles.textStyle}
            placeholder='הקלד קטגוריה...'
            //onChangeText={onChangeText}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="העלאת תמונה מהמכשיר" onPress={pickImage} color="#64c0b5" />
      </View>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button title="הוסף קטגוריה" color="#8ad2c6"/>
    </View>    
  )

}

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  container:{
    flex:1,
    backgroundColor: '#E4FAF5',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  textContainer:{
    //alignItems: 'center',
    flexDirection:'row',
    //justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  textStyle:{
    borderWidth:2,
    borderColor:"#64c0b5",
    width:'50%',
  },
  buttonStyle:{
    //alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20
  }



})