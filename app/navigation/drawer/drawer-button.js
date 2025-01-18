import { Image, Platform, StyleSheet, View } from 'react-native';
import * as React from 'react';
import { Images } from '../../shared/themes';
import { toggleDrawer } from '../nav-ref';
import TouchableItem from './touchable-item';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  touchableItem: {
    marginHorizontal: 11,
  },
  image: {
    height: 24,
    width: 24,
    margin: 3,
    resizeMode: 'contain',
  },
});

export const DrawerButton = props => {
  // const dimensions = useWindowDimensions();
  // hide the menu button since it's permanent on large screens
  const largeScreen = false; //dimensions.width >= 768;
  return largeScreen ? null : (
    <View style={styles.wrapper} testID={'drawerButtonWrapper'}>
      <TouchableItem
        testID={'drawerButton'}
        onPress={toggleDrawer}
        accessibilityLabel={'Drawer Button'}
        style={styles.touchableItem}
        hitSlop={Platform.select({
          ios: undefined,
          default: { top: 16, right: 16, bottom: 16, left: 16 },
        })}
      >
        {/* Button Image */}
        <Image source={Images.toggleDrawerIcon} style={styles.image} />
      </TouchableItem>
    </View>
  );
};
