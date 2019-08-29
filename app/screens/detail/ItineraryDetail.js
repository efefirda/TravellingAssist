import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  CardAccommodation,
  CardDepartureAndArrival,
  CardExcursionAndRestaurant,
  CardFreeTime,
  CardQueueAndTransit,
  CardStartAndEndDay,
  CardTransport,
} from './components/cardItinerary';

import { Container } from '../../components/container';
import stylesGlobal from '../styles';
import styles from './styles';

import NoImage from '../../assets/images/NoImage.png';

const ItineraryDetail = () => {
  return (
    <Container>
      <ScrollView style={stylesGlobal.containerScroll}>
        <Container>
          <View style={[stylesGlobal.width100, stylesGlobal.paddingRight10]}>
            <View style={styles.line} />
            <CardAccommodation
              time="10:00 - 14:21"
              city="Kuta"
              image={NoImage}
              name="Mercure Legian"
              type="CHECKIN"
            />
            <CardAccommodation
              time="10:00 - 14:21"
              city="Kuta"
              image={NoImage}
              name="Mercure Legian"
              type="CHECKOUT"
            />
            <CardAccommodation
              time="10:00 - 14:21"
              city="Kuta"
              image={NoImage}
              name="Mercure Legian"
              type="LEAVE"
            />
            <CardAccommodation
              time="10:00 - 14:21"
              city="Kuta"
              image={NoImage}
              name="Mercure Legian"
              type="RETURN"
            />
            <CardDepartureAndArrival
              time="02:30"
              type="DEPARTURE"
              airport="Dubai International Airport"
              flightNumber="ABC123"
            />
            <CardDepartureAndArrival
              time="02:30"
              type="ARRIVAL"
              airport="Dubai International Airport"
              flightNumber="ABC123"
            />
            <CardExcursionAndRestaurant
              time="02:30"
              type="MEAL"
              name="Rumah Makan Seafood"
              image={NoImage}
              onPress={() => handleDetail('Restaurant')}
            />
            <CardExcursionAndRestaurant
              time="02:30"
              type="EXCURSION"
              name="Tanah Lot Temple"
              image={NoImage}
              onPress={() => handleDetail('Ecxursion')}
            />
            <CardFreeTime
              time="13:00"
              city="Kuta"
              duration="1 Hour"
              note="Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Vivamus placerat vel dolor id volutpat. Integer ..."
            />
            <CardQueueAndTransit
              time="01:00-02:30"
              city="Jakarta"
              duration="1 Hour 30 Minutes"
              type="QUEUETIME"
            />
            <CardQueueAndTransit
              time="01:00-02:30"
              city="Jakarta"
              duration="1 Hour 30 Minutes"
              type="TRANSIT"
            />
            <CardStartAndEndDay
              city="Jakarta"
              time="01:00-02:30"
              type="STARTDAY"
            />
            <CardStartAndEndDay
              city="Jakarta"
              time="01:00-02:30"
              type="ENDDAY"
            />
            <CardTransport
              time="10:45"
              duration="1 Hours 30 Minutes"
              city="Dubai"
              from="Ngurah Rai International Airport"
              to="Tanah Lot Temple"
              vehicle="Saloon/Sedan"
            />
          </View>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default ItineraryDetail;
