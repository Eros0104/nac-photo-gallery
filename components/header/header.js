import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import styles from './header.styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar backgroundColor={styles.statusBar.backgroundColor} />
    <Text style={styles.text}>{title}</Text>
  </View>
);

export default Header;
