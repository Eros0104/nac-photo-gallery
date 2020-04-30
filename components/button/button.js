import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import style from './button.styles';

const Button = ({ children, onPress }) => (
  <TouchableOpacity style={style.touchableOpacity} onPress={onPress}>
    <View style={style.view}>
      <Text style={style.text}>{children}</Text>
    </View>
  </TouchableOpacity>
);


export default Button;
