
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { GuideVideo } from '../components/GuideVideo';

export const GuidingVideo = () => {
  return (
    <View style={styles.container}>
      <GuideVideo/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#E4FAF5',
    },
  });
  