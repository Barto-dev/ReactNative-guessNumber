import React, {useState} from 'react';
import {View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, StyleSheet} from 'react-native';
import colors from '../constants/color';

import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import NumberContainer from '../components/NumberContainer/NumberContainer';

const StartGameScreen = ({onStartGame}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    // [^0-9]/g все значения которые не являются числами
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    setEnteredValue('');
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{
        text: 'Okay',
        style: 'destructive',
        onPress: () => {
        }
      }])
      return;
    }
    // компонент перерендерится после выполнения этих трех команд и забатчит сразу все изменения
    setConfirmed(true);
    // этот код выполнится в слеюущем тике рендеринга, поэтому доступ до enteredValue еще будет,
    // но как по мне такой способ не очень чистый и может сбить с толку
    setSelectedNumber(parseInt(enteredValue));
    Keyboard.dismiss();
  }

  const confirmedText = (
    <Card style={styles.chosenBlock}>
      <Text style={styles.chosenText}>Chosen Number</Text>
      <NumberContainer number={selectedNumber}/>
      <View style={styles.button}>
        <Button title="START GAME" onPress={() => onStartGame(selectedNumber)}/>
      </View>
    </Card>
  );

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
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
              <Button color="#fff" title="Confirm" onPress={confirmInputHandler} />
            </View>
            <View style={[styles.button, styles.reset]}>
              <Button color="#fff" title="Reset" onPress={resetInputHandler} />
            </View>
          </View>
        </Card>
        {confirmed && confirmedText}
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
  },
  chosenBlock: {
    marginVertical: 15,
    alignItems: 'center'
  },
  chosenText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.PRIMARY
  }
})

export default StartGameScreen;
