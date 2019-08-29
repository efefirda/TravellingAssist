import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { ActivityIndicator } from 'react-native';
import List from './components/List';
import CardExcursion from './components/CardExcursion';
import ExampleImage from '../../assets/images/des3.jpg';
import { Container } from '../../components/container';

import { getBookingDetailApi } from '../../api/bookingDetailApi';

const ListRestaurant = () => {
  const navigation = useNavigation();

  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllData = () => {
    getBookingDetailApi('0QVCDC', 'Tba').then(response => {
      setRestaurant(response.data.RestaurantSum);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  //handle
  const handleSeeDetail = () => {
    return navigation.navigate('RestaurantDetail');
  };

  return (
    <List>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Container>
          {restaurant
            ? restaurant.map((item, index) => {
                return (
                  <CardExcursion
                    key={index}
                    title={item.Name}
                    image={ExampleImage}
                    visitDate="2 April 2019"
                    description={item.Description}
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

export default ListRestaurant;
