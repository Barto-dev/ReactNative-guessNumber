import React from 'react';
import {View, StyleSheet} from 'react-native';

const Cart = ({children, style}) => {
  return (
    // same work with CSS cascade, last style in array have priority
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  }
})

export default Cart;
