import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from "../Style/HeaderS";
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Morse', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        )
    }
}
