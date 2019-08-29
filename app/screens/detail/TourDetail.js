import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

//component
import { Container } from '../../components/container';
import Text from '../../components/text/FontText';
import { useNavigation } from 'react-navigation-hooks';
import CardTourInformation from './components/CardTourInformation';
import CardFlightInformation from './components/CardFlightInformation';
import CardMeetingPoint from './components/CardMeetingPoint';
import CardWhereWeStay from './components/CardWhereWeStay';
import CardInformationWithImage from './components/CardInformationWithImage';
import CardWhereWeEat from './components/CardWhereWeEat';
import CardListItinerary from './components/CardListItinerary';
import CardAdditional from './components/CardAdditional';
import CardGuestList from './components/CardGuestList';
import CardTermsAndConditions from './components/CardTermsAndConditions';

//styles
import styles from './styles';
import stylesGlobal from '../../screens/styles';

//assets
import ExamplaImage from '../../assets/images/des3.jpg';

//api
import { getBookingDetailApi } from '../../api/bookingDetailApi';

const TourDetail = () => {
  const [generalInfo, setGeneralInfo] = useState([]);
  const [accommodation, setAccommodation] = useState([]);
  const [excursion, setExcursion] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [guest, setGuest] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [departure, setDeparture] = useState([]);
  const [arrival, setArrival] = useState([]);
  const [additionalitem, setAdditionalItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllData = () => {
    getBookingDetailApi('0QVCDC', 'Tba').then(response => {
      setGeneralInfo(response.data.BookingDetailSum);
      setAccommodation(response.data.AccommodationSum);
      setExcursion(response.data.AttractionSum);
      setRestaurant(response.data.RestaurantSum);
      setGuest(response.data.TourGuestSum);
      setItinerary(response.data.DailyPrograms);
      setDeparture(response.data.HeadlineProgram.Departures);
      setArrival(response.data.HeadlineProgram.Returns);
      setAdditionalItem(response.data.AdditionalItems);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const navigation = useNavigation();

  //handle
  const handleSeeAll = rootName => {
    navigation.navigate(rootName);
  };

  const handleItineraryDetail = () => {
    navigation.navigate('ItineraryDetail');
  };

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Container>
          <ScrollView
            style={[
              stylesGlobal.containerScroll,
              stylesGlobal.paddingHorizontal20,
            ]}
          >
            <Container>
              <View
                style={[
                  stylesGlobal.paddingBottom10,
                  stylesGlobal.marginTop20,
                  styles.leftStart,
                  stylesGlobal.width100,
                ]}
              >
                <Text type="bold" style={stylesGlobal.text16}>
                  General Information
                </Text>
              </View>
              <CardTourInformation
                tourName="Booking Name Lorem Ipsum sit amet dolor"
                bookingNumber="CA2932938293"
                tourDate="5 Apr 2019 - 6 Jun 2019"
                destination="London (1D), Manchester(1D) Brunei(1D)"
                travelAgentName="Booking Name Lorem"
                travelAgentEmail="Booking Name Lorem"
                travelAgentTelephone="+62312392813"
                travelAgentRegion="Kuta"
                image={ExamplaImage}
              />
              <CardFlightInformation
                departure="CGK"
                arrival="AUH"
                departureAirport="Soekarno Hatta Airport"
                arrivalAirport="Soekarno Hatta Airport"
                duration="5 H 20 M"
                flightNumber="KJSKHFH"
              />
              <CardMeetingPoint
                description="Participants are expected to gather on April 4, 2019 at Terminal 3
              at 21.00 WIB and report to the tour leader if it arrives."
              />
              <CardInformationWithImage
                image={ExamplaImage}
                onPress={() => handleSeeAll('ListAccommodation')}
                data={accommodation.slice(0, 2)}
                type="hotel"
              />
              <CardInformationWithImage
                image={ExamplaImage}
                onPress={() => handleSeeAll('ListExcursion')}
                data={excursion.slice(0, 2)}
                type="excursion"
              />
              <CardInformationWithImage
                image={ExamplaImage}
                onPress={() => handleSeeAll('ListRestaurant')}
                data={restaurant.slice(0, 2)}
                type="restaurant"
              />
              <CardListItinerary
                image={ExamplaImage}
                cityName="Dubai"
                day="Day 1: 14 Agustus 2019"
                onPress={() => handleItineraryDetail()}
              />
              <CardAdditional
                additionalName="Additional 1"
                description="Participants are expected to gather on April 4, 2019 at Terminal 3
              at 21.00 WIB and report to the tour leader if it arrives."
              />
              <CardTermsAndConditions
                termsAndConditionName="Lorem ipsum 1"
                description="Participants are expected to gather on April 4, 2019 at Terminal 3
              at 21.00 WIB and report to the tour leader if it arrives."
              />
            </Container>
          </ScrollView>
        </Container>
      )}
    </Container>
  );
};

export default TourDetail;
