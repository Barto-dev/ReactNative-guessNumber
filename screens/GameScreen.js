import React, {useRef, useState, useEffect} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

import NumberContainer from '../components/NumberContainer/NumberContainer';
import Card from '../components/Card/Card';

const generateRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const GameScreen = ({userChoice, onGameOver}) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100));
  const [guessRounds, setGuessRounds] = useState(0);

  useEffect(() => {
      if (currentGuess === userChoice) {
        onGameOver(guessRounds);
      }
  }, [currentGuess]);


  // при изменении значений в useRef() компонент не будет перерендериваться
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {

    if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
      Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}])
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess - 1;
    } else if (direction === 'greater') {
      currentLow.current = currentGuess + 1;
    }
    setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current));
    setGuessRounds((current) => current + 1);
  }

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(null, 'lower')} />
        <Button title="GREATER" onPress={nextGuessHandler.bind(null, 'greater')} />
      </Card>
      {currentGuess === userChoice && <Text>You won</Text>}
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
