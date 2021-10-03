import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const CustomButton = ({title, style, cb}) => {
  return (
    <View style={[styles.button, style]}>
      <Button onPress={cb}>
        <Text style={styles.color}>{title}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  text: {
    color: '#fff'
  }
})

export default CustomButton;
