import React, {useState} from 'react';
import {View, Text, Button, TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import colors from '../constants/color';

import Card from '../components/Card/Card';
import Input from '../components/Input/Input';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText) => {
    // [^0-9]/g все значения которые не являются числами
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>

        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input style={styles.input}
                 keyboardType="number-pad"
                 maxLength={2}
                 value={enteredValue} onChangeText={numberInputHandler} />
          <View style={styles.buttonContainer}>
            <View style={[styles.button, styles.confirm]}>
              <Button color="#fff" title="Confirm" onPress={() => {
              }} />
            </View>
            <View style={[styles.button, styles.reset]}>
              <Button color="#fff" title="Reset" onPress={() => {
              }} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 15,
    textTransform: 'uppercase'
  },
  inputContainer: {
    alignItems: 'center',
    width: 300,
    maxWidth: '80%',
  },
  input: {
    marginVertical: 20,
    textAlign: 'center',
    width: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  button: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 10,
    minWidth: 120,
  },
  reset: {
    backgroundColor: colors.ERROR,
  },
  confirm: {
    backgroundColor: colors.SECONDARY,
  }
})

export default StartGameScreen;
