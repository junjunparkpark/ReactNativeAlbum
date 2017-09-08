import React, { Component } from 'react';
import ReactNative, { Text, AppRegistry } from 'react-native';

const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>
};

const styles = {
  textStyle: {
    fontSize: 200
  }
}

export default Header;

