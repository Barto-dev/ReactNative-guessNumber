import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

import Header from './components/Header/Header';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = userNumber ? <GameScreen userChoice={userNumber}/> :  <StartGameScreen onStartGame={startGameHandler}/>;

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      <StatusBar barStyle="light-content" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1
  }
});

export default App;
