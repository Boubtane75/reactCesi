import {BodyStyle} from "../Style/BodyS";
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import LangUn from './LangUn.js';
import LangDeux from './LangDeux.js';
import Morse from './Morse.js';

export default class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={BodyStyle.container}>
                <LangUn
                    text = {this.props.textLangUn}
                    setLangUnText={this.props.setLangUnText}
                />
                <LangDeux/>
                <Morse
                    text = {this.props.TextMorse }
                    setMorseText={this.props.setMorseText}
                    copyLangUnMorse={this.props.copyLangUnMorse}
                    TextLangUn={this.props.TextLangUn}
                    beepMorse = {this.props.beepMorse}
                    speak = {this.props.speak}
                />
            </View>
        )
    }
}
