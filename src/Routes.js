import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer"; 
import { NavigationContainer } from "@react-navigation/native";
import { LoveScreen, SunshineScreen } from './pages/exemplo';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Love">
            <Drawer.Screen name="Love" component={LoveScreen}/>
            <Drawer.Screen name="Sunshine" component={SunshineScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
};