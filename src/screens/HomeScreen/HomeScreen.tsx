import { useNavigationState } from '@react-navigation/native';
import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { useCustomRoute } from '../../navigations/hooks';

const HomeScreen: FunctionComponent = function HomeScreen() {
  const navi = useNavigationState(state => state);
  const route = useCustomRoute<'Home'>();
  console.log('props >>', route.params.homeProp);
  console.log('navi State >>', navi);
  return (
    <View>
      <Text>{'홈'}</Text>
    </View>
  );
};

export default HomeScreen;
