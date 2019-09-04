import React from 'react';
import {  Text, View } from 'react-native';
<<<<<<< HEAD
import Header from './Components/Header.js';
import Lang1 from './Components/Lang1.js';
=======
import AppHeader from './Components/Header.js';
>>>>>>> f31f1bdd3af6790924fdb9e122ed5d8b6a1e325b
import Body from './Components/Body.js';
import Button from './Components/Boutons';




export default function App() {
  return (
    <View style = {{flex: 1}}>
        <Header/>
        <Lang1/>
        <AppHeader/>
        <Button title="Button with icon component"/>
        <Body/>
    </View>
  );
}

