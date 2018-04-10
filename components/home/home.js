import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { MainNavigator } from '../../router';
export default class Home extends Component {
  render() {
    return <MainNavigator />;
  }
}