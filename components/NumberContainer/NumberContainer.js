import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/color';

const NumberContainer = ({number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
};

const styles  = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.PRIMARY
  }
});

export default NumberContainer;
