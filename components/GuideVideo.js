import { useRef } from 'react';
import { Video } from 'expo-av';
import { StyleSheet } from 'react-native';

export const GuideVideo = () => {
    const video = useRef(null);
    return (
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
    )

}

const styles = StyleSheet.create({
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
  });

