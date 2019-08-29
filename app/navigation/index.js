import React from 'react';
import { TouchableOpacity, Platform, StatusBar, Image } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import { HomeStack, TermsAndConditionStack } from './homeNav';
import { WelcomeStack } from './welcomeNav';
import {
  TourDetailStack,
  AccommodationDetailStack,
  RoomDetailStack,
  ExcursionDetailStack,
  RestaurantDetailStack,
  ItineraryDetailStack,
} from './detailNav';
import {
  ListAccommodationStack,
  ListExcursionStack,
  ListRestaurantStack,
  ListAllServicesStack,
} from './listNav';
import { LinearGradient } from 'expo-linear-gradient';
import IconBack from '../assets/icons/arrow_back.png';
import styles from './styles';

const AppStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeStack,
      navigationOptions: {
        header: null,
      },
    },

    Home: {
      screen: HomeStack,
      navigationOptions: {
        headerTitle: 'My Trip',
      },
    },

    TermsAndCondition: {
      screen: TermsAndConditionStack,
      navigationOptions: {
        headerTitle: 'Terms and Condition of Tour',
      },
    },

    TourDetail: {
      screen: TourDetailStack,
      navigationOptions: {
        headerTitle: 'Tour Detail',
      },
    },

    ListAccommodation: {
      screen: ListAccommodationStack,
      navigationOptions: {
        headerTitle: 'List Accommodation',
      },
    },

    ListExcursion: {
      screen: ListExcursionStack,
      navigationOptions: {
        headerTitle: 'List Excursion',
      },
    },

    ListRestaurant: {
      screen: ListRestaurantStack,
      navigationOptions: {
        headerTitle: 'List Restaurant',
      },
    },

    ListAllServices: {
      screen: ListAllServicesStack,
      navigationOptions: {
        headerTitle: 'List Services',
      },
    },

    AccommodationDetail: {
      screen: AccommodationDetailStack,
      navigationOptions: {
        header: null,
      },
    },
    RoomDetail: {
      screen: RoomDetailStack,
      navigationOptions: {
        header: null,
      },
    },
    ExcursionDetail: {
      screen: ExcursionDetailStack,
      navigationOptions: {
        header: null,
      },
    },
    RestaurantDetail: {
      screen: RestaurantDetailStack,
      navigationOptions: {
        header: null,
      },
    },
    ItineraryDetail: {
      screen: ItineraryDetailStack,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      if (
        routeName == 'Welcome' ||
        routeName == 'AccommodationDetail' ||
        routeName == 'RoomDetail' ||
        routeName == 'ExcursionDetail' ||
        routeName == 'RestaurantDetail'
      ) {
        return { header: () => null };
      } else {
        return {
          headerTintColor: 'white',
          headerTitleStyle: {
            width: '90%',
            color: '#252525',
            textAlign: 'center',
            fontSize: 16,
          },
          headerLeft: (
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={[
                styles.marginLeft10,
                styles.flexDirectionRow,
                { width: 20, height: 20 },
              ]}
            >
              <Image
                source={IconBack}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
          ),
        };
      }
    },
  }
);

const Root = createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    App: AppStack,
    // Auth: AuthStack
  },
  {
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  }
);

const container = createAppContainer(Root);
export default container;
