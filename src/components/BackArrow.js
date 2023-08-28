import React from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import images from '../constants/images';

const margin = StatusBar.currentHeight;

export default function BackArrow() {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <TouchableOpacity onPress={goBack} style={styles.arrowContainer}>
      <Image source={images.back} style={styles.arrow} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arrow: { width: 20, height: 15 },
  arrowContainer: {
    position: 'absolute',
    top: margin,
    left: margin,

    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 35,
  },
});