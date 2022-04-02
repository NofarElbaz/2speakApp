import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export const Guide = () => {
  const video = React.useRef(null);
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <View style={styles.buttons}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#E4FAF5',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
  });
  