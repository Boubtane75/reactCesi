import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from './Components/Header.js';
import Body from './Components/Body.js';
import Button from './Components/Boutons';
import morselib from 'morse-lib';
import Audio from 'expo-av';
import * as Speech from 'expo-speech';



export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      TextLangUn: 'La traduction en morse est ?',
      TextLangDeux: 'tpopo',
      TextMorse:'......----..',
    };
  }

  beepMorse = () => {

    alert('Si vous n\'étiez pas sourd, vous entendriez bipper...')
  }

  speak= (t) => {
    var thingToSay1 = 'La traduction en morse est ';
    var thingToSay = this.state.TextLangUn;
    // var thingToSay = this.state.TextMorse;
    // Speech.speak(thingToSay);
    alert(thingToSay + ' se traduit par ' + t);
    Speech.speak(thingToSay + ' se traduit par ' + t);

  }

  setLangUnText = (LangUnText) => {
    this.setState({TextLangUn : LangUnText})
  }

  setMorseText = (MorseText) => {
    this.setState({TextMorse : MorseText})
  }

  copyLangUnMorse = () => {
    let t = this.state.TextLangUn
    let m = new morselib()
    m = m.encode(t)
    this.setState({TextMorse : m})
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
          beepMorse = {this.beepMorse}
          speak = {this.speak}
        />
      </View>
    );
  }
}

