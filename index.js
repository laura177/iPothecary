import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import App from './App';
import MainScreen from './Screens/MainScreen';
import Profile from './Screens/Profile';
import Manager from './Screens/Manager';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
