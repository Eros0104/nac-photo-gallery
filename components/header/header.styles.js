import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  statusBar: {
    backgroundColor: colors.darkPrimary,
  },
});
