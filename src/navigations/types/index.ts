import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Access: undefined;
  Main: { propText: string };
};

export type separateNavigationProp =
  NativeStackNavigationProp<RootStackParamsList>;
