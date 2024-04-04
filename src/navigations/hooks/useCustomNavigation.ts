import { useNavigation } from '@react-navigation/native';
import { separateNavigationProp } from '../types';

export default () => useNavigation<separateNavigationProp>();
