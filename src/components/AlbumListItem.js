import React from 'React';
import { Text, View } from 'react-native';

const AlbumListItem = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View>
      <Text style={textStyle}>Artist: {props.album.artist}</Text>
      <Text style={textStyle}>Title: {props.album.title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'black',
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