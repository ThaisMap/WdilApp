import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View  } from 'react-native';

import { Headline, Button } from 'react-native-paper';

function LoveScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Headline>I</Headline>
      <Button icon="heart" mode="contained" onPress={() => navigation.navigate('Sunshine')}> lava
      </Button>
      <Headline> YOU </Headline>
       
    </View>
  );
}


function SunshineScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Headline>You are my</Headline> 
      <Button icon="weather-sunny" mode="contained" onPress={() => navigation.goBack()}>
          sunshine
      </Button> 
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Love">
        <Drawer.Screen name="Love" component={LoveScreen}/>
        <Drawer.Screen name="Sunshine" component={SunshineScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600', 
  },
  
});


