import React, { useState, useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Font } from 'expo-font';

import { Provider } from 'react-redux';
import store from '../config/store';

import Navigator from '../navigation/index';

EStyleSheet.build({
  //global
  $blacklight: '#252525',
  $gold: '#e6ca6b',
  $yellow: '#fca000',
  $red: '#ff3d3d',
  $lightRed: '#ffd8d8',
  $lightGrey: '#ccc',
  $grey: '#777777',
  $background: '#ffffff',
  $greylight: '#efefef',
  $lightgrey1: 'rgba(37, 37, 37, 0.5)',
  $lightgrey2: '#eeeeee',
  $whitelight: '#fefefe',
  $blue: '#6b82e6',
  $lightyellow: '#faf4e1',
  $green: '#00be5a',
  $coloroverlay: 'rgba(0, 0, 0, 0.5)',
  $disabel: '#eee',
});

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const fontLoadAsync = async () => {
    await Font.loadAsync({
      'montserrat-bold': require('../assets/fonts/Montserrat-Medium.ttf'),
      'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'montserrat-semibold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    });

    setFontLoaded(true);
  };

  useEffect(() => {
    fontLoadAsync();
  }, []);
  return fontLoaded ? (
    <Provider store={store}>
      <Navigator onNavigationStateChange={null} />
    </Provider>
  ) : null;
};

export default App;
