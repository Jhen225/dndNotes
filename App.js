import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, DrawerLayoutAndroid, StatusBar } from 'react-native';
import { createRootNavigator } from './router'
import { isSignedIn } from "./auth";

console.disableYellowBox = true;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false,
    }
  }

  componentDidMount() {
    isSignedIn()
      .then(signedIn => this.setState({ signedIn: signedIn, checkedSignIn: true }))
      .catch(err => alert(err));
  }

  render() {
    const { checkedSignIn, signedIn, loaded } = this.state;
    let show;
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
