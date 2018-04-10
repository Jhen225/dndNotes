import React, { Component } from 'react';
import { View, Text, Picker, TextInput, StatusBar } from 'react-native';

export default class AddNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
      text: ""
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#999'}}>
        <StatusBar hidden={true} />
        <Text id="login">Create New Note</Text>
        <Picker
          selectedValue={this.state.type}
          style={{ height: 50, width: 300, marginBottom: 20 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Place" value="place" />
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Event" value="event" />
        </Picker>
        <TextInput style={{ height: 50, width: 300, backgroundColor: '#fff', marginBottom: 20 }}/>
        <TextInput style={{ height: 50, width: 300, backgroundColor: '#fff', marginBottom: 20 }}/>
        
        {/* <TextInput /> */}

      </View>
    );
  }
}

