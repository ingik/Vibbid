import { useRoute } from '@react-navigation/native';
import { FunctionComponent } from 'react';
import { Button, View } from 'react-native';
import { useCustomNavigation, useCustomRoute } from '../../navigations/hooks';

const MainScreen: FunctionComponent = function MainScreen() {
  const route = useCustomRoute<'Main'>();
  const navigation = useCustomNavigation();
  console.log('props >>', route.params.propText);

  const onClickButton = () => {
    navigation.navigate('BottomTab', {
      screen: 'Home',
      params: { homeProp: 'home prop 입니다.' },
    });
  };

  return (
    <View>
      <Button title="바텀탭으로 !!" onPress={onClickButton} />
    </View>
  );
};

export default MainScreen;
