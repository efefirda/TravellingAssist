import { createStackNavigator } from 'react-navigation';
import Home from '../screens/home/Home';
import TermsAndConditions from '../screens/home/TermsAndCondition';

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
  }
);

export const TermsAndConditionStack = createStackNavigator(
  {
    TermsAndConditions: {
      screen: TermsAndConditions,
    },
  },
  {
    headerMode: 'none',
  }
);
