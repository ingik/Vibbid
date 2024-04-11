import { FunctionComponent } from 'react';
import { AccessScreen, MainScreen } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigation } from '..';

const RootStackNavigation: FunctionComponent = function RootStackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Access">
      <Stack.Screen component={AccessScreen} name="Access" />
      <Stack.Screen component={MainScreen} name="Main" />
      <Stack.Screen component={BottomTabNavigation} name="BottomTab" />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
