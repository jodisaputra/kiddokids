import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Router from './router';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
