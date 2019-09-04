import React from 'react';
import {  Text, View } from 'react-native';
import AppHeader from './Components/Header.js';
import Body from './Components/Body.js';
import Button from './Components/Boutons';




export default function App() {
  return (
    <View style = {{flex: 1}}>
        <AppHeader/>
        <Button title="Button with icon component"/>
        <Body/>
    </View>
  );
}

