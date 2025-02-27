import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: Metrics.section,
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: Colors.black,
  },
  icon: {
    color: Colors.black,
  },
});
