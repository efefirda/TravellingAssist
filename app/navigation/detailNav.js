import { createStackNavigator } from 'react-navigation';
import TourDetail from '../screens/detail/TourDetail';
import AccommodationDetail from '../screens/detail/AccommodationDetail';
import RoomDetail from '../screens/detail/RoomDetail';
import ExcursionDetail from '../screens/detail/ExcursionDetail';
import RestaurantDetail from '../screens/detail/RestaurantDetail';
import ItineraryDetail from '../screens/detail/ItineraryDetail';

export const TourDetailStack = createStackNavigator(
  {
    TourDetail: {
      screen: TourDetail,
    },
  },
  {
    headerMode: 'none',
  }
);

export const AccommodationDetailStack = createStackNavigator(
  {
    AccommodationDetail: {
      screen: AccommodationDetail,
    },
  },
  {
    headerMode: 'none',
  }
);

export const RoomDetailStack = createStackNavigator(
  {
    RoomDetail: {
      screen: RoomDetail,
    },
  },
  {
    headerMode: 'none',
  }
);

export const ExcursionDetailStack = createStackNavigator(
  {
    ExcursionDetail: {
      screen: ExcursionDetail,
    },
  },
  {
    headerMode: 'none',
  }
);

export const RestaurantDetailStack = createStackNavigator(
  {
    RestaurantDetail: {
      screen: RestaurantDetail,
    },
  },
  {
    headerMode: 'none',
  }
);

export const ItineraryDetailStack = createStackNavigator({
  ItineraryDetail: {
    screen: ItineraryDetail,
  },
});
