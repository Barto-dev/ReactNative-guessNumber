import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import NumberContainer from '../components/NumberContainer/NumberContainer';
import Card from '../components/Card/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum;
  }
}

const GameScreen = ({userChoice}) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {
        }} />
        <Button title="GREATER" onPress={() => {
        }} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    maxWidth: '80%'
  }

});

export default GameScreen;
