import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import List from './components/List';
import { ActivityIndicator } from 'react-native';
import { Container } from '../../components/container';
import CardExcursion from './components/CardExcursion';
import ExampleImage from '../../assets/images/des3.jpg';

import { getBookingDetailApi } from '../../api/bookingDetailApi';

const ListExcursion = () => {
  const navigation = useNavigation();

  const [excursion, setExcursion] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllData = () => {
    getBookingDetailApi('0QVCDC', 'Tba').then(response => {
      setExcursion(response.data.AttractionSum);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  //handle
  const handleSeeDetail = () => {
    return navigation.navigate('ExcursionDetail');
  };

  return (
    <List>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Container>
          {excursion
            ? excursion.map((item, index) => {
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

export default ListExcursion;
