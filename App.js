import React from 'react';
import {  Text, View } from 'react-native';
import Header from './Components/Header.js';
import Body from './Components/Body.js';

export default function App() {
  return (
    <View style = {{flex: 1}}>
        <Header/>
        <Body/>
    </View>
  );
}

