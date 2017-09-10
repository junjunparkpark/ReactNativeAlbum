import React from 'react';
import { View, Image, CardItem } from 'react-native';
import AlbumDetail from './AlbumDetail';

const AlbumListItem = (props) => {
  const { viewStyle } = styles;

  return (
    <CardItem style={viewStyle} >
      <AlbumDetail title={props.album.title} artist={props.album.title} />
      <Image source={{ url: props.album.image }} />
    </CardItem>
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