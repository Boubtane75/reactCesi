import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from "../Style/HeaderS";

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Button } from 'react-native-elements';

export default class LangDeux extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
            <Button
                icon={
                    <Icon
                        name="arrow-down"
                        size={15}
                        color="white"
                    />
                }
                title=" Traduction"
            />

            <Input
            placeholder=' Texte en langue 2'
            leftIcon={{ type: 'font-awesome', name: 'globe' }}
            />
            </View>
        )
    }
}

