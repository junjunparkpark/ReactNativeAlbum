import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'https://rallycoding.herokuapp.com/api/music_albums',
      albums: []
    };
  }

  componentWillMount() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    axios.get(this.state.url)
      .then((response) => {
        console.log('SUCCESS Fetching Albums');
        this.setState({ albums: response.data });
      })
      .catch((error) => {
        console.log('ERROR Fetching Albums: ', error);
      });
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
