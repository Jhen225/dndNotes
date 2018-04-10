import React, { Component } from 'react';
import axios from "axios";
import { View, TouchableOpacity, Text, StatusBar, StyleSheet, Dimensions, FlatList, Picker } from 'react-native';
export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://localhost:3000',
      notes: ["hi"],
      sortBy: ''
    };
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then(res => res.json())
      .then(data => this.setState({ notes: data }))
  }

  renderItem({ item, index }) {
    return <Text style={styles.rowItem}>{item}</Text>
  }

  onValueChange(value, index) {
    console.log(value, index)
    this.setState({ sortBy: value })
    //call to api to update notes array
    axios.get()
      .then(res => res.json())
      .then(data => this.setState({ notes: data }))
  }

  addNote() {
    this.setState({ notes: [...this.state.notes, "x"] })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar hidden={true} />
        <View style={styles.sortContainer}>
          <Text>Sort By: </Text>
          <Picker
            selectedValue={this.state.sortBy}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => this.onValueChange(itemValue, itemIndex)}>
            <Picker.Item label="" value="" />
            <Picker.Item label="Name" value="name" />
            <Picker.Item label="Place" value="place" />
            <Picker.Item label="Event" value="event" />
          </Picker>
        </View>
        <View style={styles.listContainer} >
          <FlatList
            data={this.state.notes}
            renderItem={this.renderItem}
          />
        </View>
        <TouchableOpacity
          style={styles.floatingButton}
          // onPress={() => this.props.navigation.navigate("AddNote")}
          onPress={() => this.addNote()}
        ><Text style={styles.floatingButtonText}></Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    position: 'relative',
    paddingLeft: 10,
    paddingRight: 25,
  },
  floatingButton: {
    width: 60,
    height: 60,
    // backgroundColor: '#D48B26',
    borderRadius: 30,
    position: 'absolute',
    bottom: 50,
    left: Dimensions.get('screen').width / 2 - 30,
    borderWidth: 1,
    borderColor: '#D48B26',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sortContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  listContainer: {
    flex: 9
  },
  rowItem: {
    textAlign: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 10
  }

});