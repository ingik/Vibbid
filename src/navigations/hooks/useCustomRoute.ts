import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamsList } from '../types';

export default <
  T extends keyof R,
  R extends RootStackParamsList = RootStackParamsList,
>() => useRoute<RouteProp<R, T>>();
