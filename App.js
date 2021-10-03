import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

import Header from './components/Header/Header';

const App = () => {

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      <StatusBar barStyle="light-content" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1
  }
});

export default App;
