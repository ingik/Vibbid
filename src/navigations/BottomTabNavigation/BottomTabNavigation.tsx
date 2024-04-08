import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FunctionComponent } from 'react';
import { HomeScreen, SettingScreen } from '../../screens';
import { BottomTabParamsList } from '../types';

const BottomTabNavigation: FunctionComponent = function BottomTabNavigation() {
  const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen component={HomeScreen} name="Home" />
      <BottomTab.Screen component={SettingScreen} name="Setting" />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
