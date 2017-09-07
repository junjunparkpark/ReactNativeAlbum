import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';

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
AppRegistry.registerComponent('albums', () => App);
