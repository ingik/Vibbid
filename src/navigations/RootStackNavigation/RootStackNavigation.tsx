import { FunctionComponent } from 'react';
import { AccessScreen, MainScreen } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../types';
import { BottomTabNavigation } from '..';

const RootStackNavigation: FunctionComponent = function RootStackNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen component={AccessScreen} name="Access" />
      <Stack.Screen component={MainScreen} name="Main" />
      <Stack.Screen component={BottomTabNavigation} name="BottomTab" />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
