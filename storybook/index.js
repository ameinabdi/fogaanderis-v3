import { configure, getStorybookUI } from '@storybook/react-native/V6';
import './storybook.requires';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppConfig from '../app/config/app-config';

// import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = AppConfig.debugMode
  ? getStorybookUI({
      storage: {
        getItem: AsyncStorage.getItem,
        setItem: AsyncStorage.setItem,
      },
    })
  : View;

export default StorybookUIRoot;
