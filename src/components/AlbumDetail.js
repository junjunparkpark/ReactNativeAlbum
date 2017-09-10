import React from 'react';
import { View, Text, CardItem, Image } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <CardItem>
      <Image />
      <Text style={textStyle}>Title: {props.album.title}</Text>
      <Text style={textStyle}>Artist: {props.album.artist}</Text>
    </CardItem>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  }
}

export default AlbumDetail;
