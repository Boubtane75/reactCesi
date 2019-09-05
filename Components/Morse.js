
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from "../Style/HeaderS";

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Button } from 'react-native-elements';

export default class Morse extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     text : '...---...',
        // }
    }

    
    render() {
        console.log(this.props);
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
                title=" Morse"
                />


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

                <Text style= {[{backgroundColor: 'lightblue'}, {textAlign: 'center'}]}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

