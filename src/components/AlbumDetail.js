import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <View>
      <Text style={textStyle}>Title: {props.album.title}</Text>
      <Text style={textStyle}>Artist: {props.album.artist}</Text>
    </View>
  );
};

export default AlbumDetail;
