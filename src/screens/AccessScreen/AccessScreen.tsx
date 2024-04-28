import { Button, StyleSheet, Text, View } from 'react-native';
import { useCustomNavigation } from '../../navigations/hooks';
import { FunctionComponent } from 'react';
import Config from 'react-native-config';

const AccessScreen: FunctionComponent = function AccessScreen() {
  const navigation = useCustomNavigation();

  const onClick = () => {
    navigation.navigate('Main', { propText: '안녕하세요' });
  };

  return (
    <View style={styles.container}>
      <Text>{Config.ENV}</Text>
      <Button title="button" onPress={onClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccessScreen;
