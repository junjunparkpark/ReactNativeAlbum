import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Header headerText={'Barbell'} />
        <AlbumList />
      </View>
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
