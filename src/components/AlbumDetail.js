import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-material-design';

const AlbumDetail = (props) => {
  return (
    <View>
      <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
      <Text style={textStyle}>Title: {props.album.title}</Text>
      <Text style={textStyle}>Artist: {props.album.artist}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  }
}

export default AlbumDetail;
