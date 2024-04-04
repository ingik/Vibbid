import { useRoute } from '@react-navigation/native';
import { FunctionComponent } from 'react';
import { View } from 'react-native';
import { useCustomRoute } from '../../navigations/hooks';

const MainScreen: FunctionComponent = function MainScreen() {
  const route = useCustomRoute<'Main'>();
  console.log('props >>', route.params.propText);
  return <View />;
};

export default MainScreen;
