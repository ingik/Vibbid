import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FunctionComponent } from 'react';
import { View } from 'react-native';
import { HomeScreen, SettingScreen } from '../../screens';

const BottomTabNavigation: FunctionComponent = function BottomTabNavigation() {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen component={HomeScreen} name="Home" />
      <BottomTab.Screen component={SettingScreen} name="Setting" />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
