
import { Headline, Button } from 'react-native-paper';
import React from 'react';
import { View } from 'react-native';

export function LoveScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Headline>I</Headline>
        <Button icon="heart" mode="contained" onPress={() => navigation.navigate('Sunshine')}> lava  </Button> 
        <Headline> YOU </Headline>         
      </View>
    );
  }
  
  
 export function SunshineScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Headline>You are my</Headline> 
        <Button icon="weather-sunny" mode="contained" onPress={() => navigation.goBack()}>
            sunshine
        </Button> 
      </View>
    );
  }