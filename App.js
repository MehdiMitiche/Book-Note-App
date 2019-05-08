import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider as PaperProvider,DefaultTheme} from 'react-native-paper';

import AppNavigator from './components/AppNavigator';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: '#FFF',
  }
};

export default class App extends React.Component {



  render() {
    return (
      <PaperProvider theme={theme}>
        <AppNavigator  />
      </PaperProvider>
      
    );
  }
}


