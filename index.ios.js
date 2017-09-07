import React, { Component } from 'react';
import ReactNative, { Text } from 'react-native';

// Create a component

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Text>Some Text</Text>
    );
  }
}

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);