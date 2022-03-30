import React from "react";
import {StyleSheet,View,Text,TouchableOpacity} from "react-native";
import { Button } from "react-native-paper";
//import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ButtonNoa = ({label}) => {
    return (
        <TouchableOpacity style={style.buttonContainer}>
            <Text style={style.buttonText}>
                {label} 
            </Text>
        </TouchableOpacity>
    )

};

const styles= StyleSheet.create({
    buttonContainer: {
        backgroundColor:'red',
        width:'100%',
        height: 70,
        borderRadius:15,
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',

    }

})
export default Button;