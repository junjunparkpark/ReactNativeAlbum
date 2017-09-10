import React from 'react';
import { Text, View, Image } from 'react-native';

const AlbumListItem = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle} >
      <Image source={{ url: props.album.image }} />
      <Text style={textStyle}>Title: {props.album.title}</Text>
      <Text style={textStyle}>Artist: {props.album.artist}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20,
  }
};

export default AlbumListItem;

// artist
// :
// "Taylor Swift"
// image
// :
// "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg"
// thumbnail_image
// :
// "https://i.imgur.com/K3KJ3w4h.jpg"
// title
// :
// "Taylor Swift"
// url
// :
// "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6"