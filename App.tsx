/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppContents from './AppContents';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { RootStackParamsList } from './src/navigations/types';

function App(): React.JSX.Element {
  const navigationRef =
    createNavigationContainerRef<keyof RootStackParamsList>();
  return (
    <NavigationContainer>
      <AppContents />
    </NavigationContainer>
  );
}

export default App;
