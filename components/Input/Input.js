import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import color from '../../constants/color';

const Input = ({style, ...props}) => {
  return (
    <TextInput {...props} style={[styles.input, style]}/>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    paddingHorizontal: 5,
    height: 40,
    width: '100%',
    borderColor: color.BORDER,
    borderWidth: 1,
  }
})

export default Input;
