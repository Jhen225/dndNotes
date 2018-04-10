import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
export default class Register extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text id="register">Registration Component</Text>
      </View>
    );
  }
}