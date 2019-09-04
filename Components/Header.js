import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from "../Style/HeaderS";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={globalStyle.header}>
                <Text style={globalStyle.headerText}>Morse</Text>
            </View>
        )
    }
}
