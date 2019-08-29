import React from 'react';
import Proptypes from 'prop-types';

import { View, ScrollView } from 'react-native';
import { Container } from '../../../components/container';
import { TextTitle } from '../../../components/text';
import { CardImage } from '../../../components/card';
import Text from '../../../components/text/FontText';

import styles from '../styles';
import stylesGlobal from '../../styles';

const CardListItinerary = ({ image, cityName, day, onPress }) => {
  return (
    <View style={stylesGlobal.width100}>
      <TextTitle text="Itinerary" />
      <View style={[stylesGlobal.paddingVertical20, styles.leftCenter]}>
        <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
          Total Day's :13 Day's
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={stylesGlobal.marginBottom20}
      >
        <View style={styles.containerSlider}>
          <Container>
            <CardImage onPress={onPress} image={image} heightCard={150}>
              <Text>{cityName}</Text>
              <Text>{day}</Text>
            </CardImage>
          </Container>
        </View>
      </ScrollView>
    </View>
  );
};

CardListItinerary.propTypes = {
  image: Proptypes.string,
  cityName: Proptypes.string,
  day: Proptypes.string,
  onPress: Proptypes.func,
};

export default CardListItinerary;
