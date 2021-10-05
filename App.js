import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Header from './components/Header/Header';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)}/>
  }

  const newGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  }

  let content = userNumber ? <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/> :  <StartGameScreen onStartGame={startGameHandler} />;

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      <StatusBar barStyle="light-content" />
      {Boolean(!guessRounds) && content}
      {Boolean(guessRounds) && <GameOverScreen rounds={guessRounds} userNumber={userNumber} onNewGame={newGameHandler}/>}
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1
  }
});

export default App;
