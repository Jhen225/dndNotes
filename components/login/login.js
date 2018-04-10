import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { onSignIn, isSignedIn } from "../../auth";
import App from "../../App";
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      correctUser: 'black.josh',
      correctPass: 'password',
      username: 'black.josh',
      password: 'password',
      signedIn: false
    }
  }

  submitLogin() {
    let username = this.state.username;
    let password = this.state.password;

    // if (username == this.state.correctUser && password == this.state.correctPass) {
    onSignIn
      .then(isSignedIn => {
        // if (isSignedIn) {
        this.setState({
          username: 'black.josh',
          password: 'password'
        })
        this.props.navigation.navigate("SignedIn");
        // }
      })
    // } else {
    //   alert("Incorrect Username or Password");
    // }
  }

  render() {

    return (
      <View style={styles.mainView}>
        <StatusBar hidden={true} />
        <View>
          {/* Username */}
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => this.setState({ username: text })}
            value={this.state.username}
            underlineColorAndroid='transparent'
            returnKeyType='next'
            autoCapitalize='none'
            placeholder='Username'
            placeholderTextColor='#D48B26'
          ></TextInput>

          {/* Password */}
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            underlineColorAndroid='transparent'
            returnKeyType='done'
            autoCapitalize='none'
            placeholder='Password'
            placeholderTextColor='#D48B26'
            secureTextEntry={true}
          ></TextInput>

          {/* Submit */}
          <TouchableOpacity
            style={styles.submit}
            // onPress={this.submitLogin.bind(this)}
            onPress={() => this.submitLogin()}
          ><Text style={styles.accent}>Submit</Text></TouchableOpacity>

          {/* Forgot */}
          <Text
            style={styles.secondaryText}
          >Forgot Username/Password?</Text>

          {/* Register */}
          <Text
            style={styles.secondaryText}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >Don't Have An Account?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  accent: {
    color: '#fff'
  },
  mainView: {
    flex: 1,
    backgroundColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  secondaryText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'right',
    marginBottom: 10,
  },
  inputs: {
    width: Dimensions.get('screen').width - 40,
    backgroundColor: '#C7C7C7',
    height: 50,
    marginBottom: 20,
    borderRadius: 3,
    padding: 15,
    color: '#D48B26',
    fontSize: 16,
    lineHeight: 20
  },
  submit: {
    height: 50,
    backgroundColor: '#D48B26',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 20,
  }
});