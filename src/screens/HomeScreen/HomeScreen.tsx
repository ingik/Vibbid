import { useRoute } from '@react-navigation/native';
import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { CompositeBottomTabScreenProps } from '../../navigations/types';
import { useCustomRoute } from '../../navigations/hooks';

const HomeScreen = function HomeScreen() {
  const route = useCustomRoute<'Home'>();
  console.log('props >>', route.params.homeProp);
  return (
    <View>
      <Text>{'홈'}</Text>
    </View>
  );
};

export default HomeScreen;
