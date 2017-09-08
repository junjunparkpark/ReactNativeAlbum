import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15
  },

  textStyle: {
    fontSize: 20,
    color: 'white'
  }
};

export default Header;

