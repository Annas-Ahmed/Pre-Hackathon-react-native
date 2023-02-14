import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {compStyles} from '../styles/components_style';

function ButtonComp({title, buttonFunc}) {
  return (
    <TouchableOpacity style={compStyles.buttonComp} onPress={buttonFunc}>
      <Text style={compStyles.buttonCompText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComp;
