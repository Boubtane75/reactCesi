import React from 'react';
import {  Text, View } from 'react-native';
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function App() {
  return (
    <View style = {{flex: 1}}>
        <Header/>
        <Button
            icon={
                <Icon
                    name="arrow-right"
                    size={15}
                    color="white"
                />
            }
            title="Button with icon component"
        />
        <Body/>
    </View>
  );
}

