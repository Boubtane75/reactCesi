import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from "../Style/HeaderS";

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Button } from 'react-native-elements';

export default class LangUn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>

            <Input
            placeholder=' Texte en français'
            leftIcon={{ type: 'font-awesome', name: 'globe' }}
            onChangeText={(text) => this.props.setLangUnText(text)}
            />
            </View>
        )
    }
}

