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
            placeholder='BASIC INPUT'
            />

            <Input
            placeholder=' INPUT WITH ICON'
            leftIcon={{ type: 'font-awesome', name: 'globe' }}
            />
                <Button
                    icon={
                        <Icon
                            name="arrow-down"
                            size={15}
                            color="white"
                        />
                    }
                    title=" Morse"
                />

            <Input
            placeholder='INPUT WITH CUSTOM ICON'
            leftIcon={
                <Icon
                type= 'font-awesome5'
                name='comment-dots'
                size={24}
                color='black'
                />
            }
            />

            <Input
            placeholder='INPUT WITH SHAKING EFFECT'
            shake={true}
            />

            <Input
            placeholder='INPUT WITH ERROR MESSAGE'
            errorStyle={{ color: 'red' }}
            errorMessage='ENTER A VALID ERROR HERE'
            />
            </View>
        )
    }
}

