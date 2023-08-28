import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const AppInput = ({ style, right = null, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderBottomWidth = isFocused ? 3 : 1;

  return (
    <View style={[styles.inputContainer, { borderBottomWidth }]}>
      <TextInput
        style={[styles.input, style]}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        {...props}
      />
      {right}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    flex: 1,
  },
  inputContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    backgroundColor: 'black',
    marginTop: -5,
  },
});

export default AppInput;
