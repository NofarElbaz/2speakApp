import React from 'react'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import {Navigation} from './Navigation'
import 'expo-dev-client'


const fetchFonts = () => {
  return Font.loadAsync({

    'yeuda' : require('./assets/fonts/Yehudaclm-light-webfont.ttf'),
    'yeuda-bold' : require('./assets/fonts/Yehudaclm-bold-webfont.ttf')

  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  
  if(!fontLoaded){
    return(
      <AppLoading
      startAsync = {fetchFonts}
      onFinish={() => {
        setFontLoaded(true);
      }}
      onError={console.warn}
      />
    );
  };
  return(<Navigation/>);
}

