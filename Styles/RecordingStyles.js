import { StyleSheet ,Dimensions } from "react-native"


const windowW= Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

export const RecordingStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex :1
    },
    recordIconStack: {
      flex:1,
      justifyContent:'center',
      flexDirection: 'row',
        //marginTop: "60%",
        //marginLeft: "19%",
      
    },
    pressableStyle: {
      borderRadius: 0,
      padding: 2,
      //height: windowH/12,
      width: windowW/5,
      justifyContent: 'flex-end',
      alignItems: 'center',
      //elevation: 5,
      borderWidth: 3, //Frame thickness
      borderColor: "#cde8e1",
      //marginTop: '90%',
      marginLeft: windowW/2.7,
      textAlign: "center",
  
    },
    ScrollView:{
      backgroundColor: '#E4FAF5'
    }
      
})