import {BodyStyle} from "../Style/BodyS";
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import LangUn from './LangUn.js';

export default class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={BodyStyle.container}>
                <LangUn/>

            </View>
        )
    }
}
