import { createStackNavigator } from 'react-navigation';
import ListAccommodation from '../screens/list/ListAccommodation';
import ListExcursion from '../screens/list/ListExcursion';
import ListRestaurant from '../screens/list/ListRestaurant';
import ListAllServices from '../screens/list/ListAllServices';

export const ListAccommodationStack = createStackNavigator(
  {
    ListAccommodation: {
      screen: ListAccommodation,
    },
  },
  {
    headerMode: 'none',
  }
);

export const ListExcursionStack = createStackNavigator(
  {
    ListExcursion: {
      screen: ListExcursion,
    },
  },
  {
    headerMode: 'none',
  }
);

export const ListRestaurantStack = createStackNavigator(
  {
    ListRestaurant: {
      screen: ListRestaurant,
    },
  },
  {
    headerMode: 'none',
  }
);

export const ListAllServicesStack = createStackNavigator(
  {
    ListAllServices: {
      screen: ListAllServices,
    },
  },
  {
    headerMode: 'none',
  }
);
