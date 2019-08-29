import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { Container } from '../../components/container';
import List from './components/List';
import CardHotel from '../shared/components/CardHotel';
import ExampleImage from '../../assets/images/des3.jpg';

import { getBookingDetailApi } from '../../api/bookingDetailApi';

const ListAccommodation = () => {
  const navigation = useNavigation();

  const [accommodation, setAccommodation] = useState([]);
  const [loading, setLoading] = useState(true);

  //handle
  const handleSeeDetail = () => {
    return navigation.navigate('AccommodationDetail');
  };

  const getAllData = () => {
    getBookingDetailApi('0QVCDC', 'Tba').then(response => {
      setAccommodation(response.data.HeadlineProgram.MainPrograms);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <List>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Container>
          {accommodation
            ? accommodation.map((item, index) => {
                return (
                  <CardHotel
                    key={index}
                    title={item.AccommodationSummary.Name}
                    image={ExampleImage}
                    rating={2}
                    type="Hotel"
                    service={item.AccommodationSummary.RoomService}
                    confirmationNumber="098923ABVC"
                    room={item.AccommodationSummary.RoomName}
                    checkIn="Fri,5/12/19 at 24:00"
                    checkOut="Fri,5/12/19 at 24:00"
                    onPress={() => handleSeeDetail()}
                  />
                );
              })
            : null}
        </Container>
      )}
    </List>
  );
};

export default ListAccommodation;
