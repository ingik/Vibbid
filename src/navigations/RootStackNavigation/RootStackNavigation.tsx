import { FunctionComponent } from 'react';
import { AccessScreen, MainScreen } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigationState } from '@react-navigation/native';
import { RootStackParamsList } from '../types';

const RootStackNavigation: FunctionComponent = function RootStackNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamsList>();
  // const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen component={AccessScreen} name="Access" />
      <Stack.Screen component={MainScreen} name="Main" />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
