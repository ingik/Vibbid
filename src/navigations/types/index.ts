import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamsList = {
  Access: undefined;
  Main: { propText: string };
  BottomTab: NavigatorScreenParams<BottomTabParamsList>;
};

export type BottomTabParamsList = {
  Home: { homeProp: string };
  Setting: undefined;
};

export type separateNavigationProp =
  NativeStackNavigationProp<RootStackParamsList>;

export type RootStackScreenProps<T extends keyof RootStackParamsList> =
  StackScreenProps<RootStackParamsList, T>;

export type BottomTabComScreenProps<T extends keyof BottomTabParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamsList, T>,
    RootStackScreenProps<keyof RootStackParamsList>
  >;

export type ParamsList<T> = T extends keyof RootStackParamsList
  ? RootStackParamsList
  : BottomTabParamsList;
