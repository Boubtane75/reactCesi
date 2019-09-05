import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from './Components/Header.js';
import Body from './Components/Body.js';
import Button from './Components/Boutons';




export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      TextLangUn: 'toto',
      TextLangDeux: 'tpopo',
      TextMorse:'......----..',
    };
  }

  setLangUnText = (LangUnText) => {
    this.setState({TextLangUn : LangUnText})
  }

  setMorseText = (MorseText) => {
    this.setState({TextMorse : MorseText})
  }

  copyLangUnMorse = () => {
    let t = this.state.TextLangUn
    this.setState({TextMorse : t})
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <Button title="Button with icon component" />
        <Body
          TextMorse = {this.state.TextMorse}
          setLangUnText={this.setLangUnText}
          setMorseText={this.setMorseText}
          TextLangUn = {this.state.TextLangUn}
          copyLangUnMorse = {this.copyLangUnMorse}
        />
      </View>
    );
  }
}

