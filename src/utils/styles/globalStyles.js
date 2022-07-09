import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
export const globalStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  badge: {
    position: 'absolute',
    backgroundColor: colors.light_orange,
    borderRadius: 10,
    width: 52,
  },

  badgeText: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 13,
    padding: 5,
    color: colors.dark_orange,
    textAlign: 'center',
  },
});
