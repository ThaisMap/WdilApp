import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const theme = {
    ...DefaultTheme,
    roundness: 4,
    colors: {
      ...DefaultTheme.colors,
      primary: '#81C784',
      accent: '#00E186',
    },
  };

export default function Main() {
    return (
      <PaperProvider theme ={theme}>
        <App />
      </PaperProvider>
    );
}
  
AppRegistry.registerComponent(appName, () => Main);