import { useNavigationState } from '@react-navigation/native';
import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';

const SettingScreen: FunctionComponent = function SettingScreen() {
  const navi = useNavigationState(state => state);
  console.log(navi);
  return (
    <View>
      <Text>{'설정'}</Text>
    </View>
  );
};

export default SettingScreen;
