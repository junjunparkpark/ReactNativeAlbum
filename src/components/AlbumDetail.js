import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
  return (
    <Card>
      <Text style={textStyle}>Title: {props.album.title}</Text>
      <Text style={textStyle}>Artist: {props.album.artist}</Text>
    </Card>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  }
}

export default AlbumDetail;
