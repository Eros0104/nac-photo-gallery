import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  view: {
    backgroundColor: colors.secondary,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 25,
  },
  touchableOpacity: {
    marginTop: 5,
  },
  text: {
    color: colors.white,
  },
});
