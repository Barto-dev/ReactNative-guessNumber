import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const GameOverScreen = ({rounds, userNumber, onNewGame}) => {
  return (
    <View style={styles.screen}>
      <Text>Game over</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title='NEW GAME' onPress={onNewGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GameOverScreen;
