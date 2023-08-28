import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';

export default function AppButton({ text, ...props }) {
  const backgroundColor = colors[props.disabled ? 'WARM_GREY' : 'PALE_TEAL'];

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} {...props}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 22,
    color: colors.WHITE,
    textAlign: 'center',
  },
});
