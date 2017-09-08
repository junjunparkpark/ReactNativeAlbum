import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle } = styles;

  return (
    <View>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStlye: {

  },
  
  textStyle: {
    fontSize: 40
  }
}

export default Header;

