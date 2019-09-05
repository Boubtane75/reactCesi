import {BodyStyle} from "../Style/BouttonS";
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ViewButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style ={{flexDirection:'row', justifyContent:'space-around',marginTop:20, marginBottom:20}} >
                <Button
                    icon={
                        <Icon
                            name='microphone'
                            size={30}
                            color="white"
                        />
                    }
                />
                <Button
                    icon={
                        <Icon
                            name="play"
                            size={30}
                            color="white"
                        />
                    }

                />
            </View>
        )
    }
}
