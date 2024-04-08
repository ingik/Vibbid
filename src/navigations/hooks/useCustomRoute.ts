import { RouteProp, useRoute } from '@react-navigation/native';
import { ParamsList } from '../types';

export default <T extends keyof R, R extends ParamsList<T> = ParamsList<T>>() =>
  useRoute<RouteProp<R, T>>();
