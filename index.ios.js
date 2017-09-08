import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header.js';

// Create a component

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Header />
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
