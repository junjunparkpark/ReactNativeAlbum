import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumListItem from './AlbumListItem';
import AlbumDetail from './AlbumDetail';
import Card from './Card';

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
        console.log('SUCCESS Fetching Albums', response);
        this.setState({ albums: response.data });
      })
      .catch((error) => {
        console.log('ERROR Fetching Albums: ', error);
      });
  }

  render() {

    return (
      <View>
        {this.state.albums.map(album => <h1>{album.title}</h1>)}
      </View>
    );
  }
}

export default AlbumList;
