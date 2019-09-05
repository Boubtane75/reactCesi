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

            {/* <Input
            placeholder='BASIC INPUT'
            /> */}

            <Input
            placeholder=' Texte en français'
            leftIcon={{ type: 'font-awesome', name: 'globe' }}
            />
{/* 
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
            /> */}


            {/* <Input
            placeholder='INPUT WITH SHAKING EFFECT'
            shake={true}
            />

            <Input
            placeholder='INPUT WITH ERROR MESSAGE'
            errorStyle={{ color: 'red' }}
            errorMessage='ENTER A VALID ERROR HERE'
            /> */}
            </View>
        )
    }
}

