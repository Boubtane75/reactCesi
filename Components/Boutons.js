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
            <View >
                <Button
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                    }
                    title="Audio"
                />
            </View>
        )
    }
}
