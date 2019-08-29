import { createStackNavigator } from 'react-navigation';
import Welcome from '../screens/welcome/Welcome';

export const WelcomeStack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
  },
  {
    headerMode: 'none',
  }
);
