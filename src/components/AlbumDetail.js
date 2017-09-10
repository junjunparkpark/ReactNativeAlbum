import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-material-design';

const AlbumDetail = (props) => {
  return (
    <Card.Body>
      <Image />
      <Text style={textStyle}>Title: {props.album.title}</Text>
      <Text style={textStyle}>Artist: {props.album.artist}</Text>
    </Card.Body>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  }
}

export default AlbumDetail;
