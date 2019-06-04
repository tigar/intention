import React, { Component } from 'react';
import { View, Text } from 'react-native';
import navStyles from './styles/navStyles';

export default class Friend extends Component {
    static navigationOptions = {
        title: "Intention",
        ...navStyles
        };

  render() {
    return (
      <View>
        <Text>New Friend!</Text>
      </View>
    );
  }
}
