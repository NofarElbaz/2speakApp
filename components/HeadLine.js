
import React from "react";
import {StyleSheet,View} from "react-native";


export const HeadLine = () => {
    return(  <View style={HeaderStyles.header}></View> ) ;
      
};

export const HeaderStyles = StyleSheet.create({
    header: {
        height: '12%',
        backgroundColor: '#F0C421'
    }
})


