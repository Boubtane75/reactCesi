
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {globalStyle} from "../Style/HeaderS";

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Button } from 'react-native-elements';

export default class Morse extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        console.log(this.props);
        return (
            <View>

            <Button onPress={() => this.props.copyLangUnMorse()}
                icon={
                    <Icon
                    name="arrow-down"
                    size={15}
                    color="white"
                    />
                }
                title=" Morse"
                // disabled = 'true'
                />

            {/* <TouchableOpacity onPress={() => this.props.copyLangUnMorse()}>
                <Button
                icon={
                    <Icon
                    name="arrow-down"
                    size={15}
                    color="white"
                    />
                }
                title=" Morse"
                disabled = 'true'
                />
            </TouchableOpacity> */}


                <Input
                placeholder= {this.props.text}
                leftIcon={
                    <Icon
                    type= 'font-awesome5'
                    name='comment-dots'
                    size={24}
                    color='black'
                    />
                    
                }
                onChangeText={(text) => this.props.setMorseText(text)}
                value={this.props.text}
                // text = {this.props.text}
                />

                {/* <Text style= {[{backgroundColor: 'lightblue'}, {textAlign: 'center'}]}>
                    {this.props.text}
                </Text> */}
                <Button onPress={() => this.props.speak(this.props.text)}
                icon={
                    <Icon
                    name="arrow-right"
                    size={15}
                    color="white"
                    />
                }
                title=" Beep"
                // disabled = 'true'
            />
            </View>
        )
    }
}

