import React from 'react';
import { View } from 'react-native';
import style from './container.styles';

const Button = ({ children }) => (
  <View style={style.view}>
    {children}
  </View>
);

export default Button;
