import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  fetchAlbums() {
    axios.get({

    });
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
};

export default AlbumList;