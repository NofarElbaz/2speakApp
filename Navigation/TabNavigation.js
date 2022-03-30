import * as React from 'react';
import {View ,StyleSheet ,Button} from 'react-native';


export const TabNavigation =  (props) => {
  return (
    <View style={style.container}>
    <Button
      title="לוח אימון"
      onPress={() => props.navigation.navigate('Traning')}
    />
    <Button
      title="תרגום"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        props.navigation.navigate('FirstHome')
      }}
    />
    <Button
      title="מדריך"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        props.navigation.navigate('Guide1')
      }}
    />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex :1,
    flexDirection : 'row'
  }

});