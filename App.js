import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from "./screens/homeScreen"
import ISSLocationScreen from "./screens/issLocationScreen"
import MeteorScreen from "./screens/meteorScreen"
import {StatusBar} from "expo-status-bar"
import "react-native-gesture-handler"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator intialRouteName="Home" screenOptions={{
      headerShown:false
    }}>
    <Stack.Screen
    name="Home" component={HomeScreen}/>
    <Stack.Screen
    name="ISSLocation" component={ISSLocationScreen}/>
    <Stack.Screen
    name="Meteor" component={MeteorScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems:"center",
  },
});
