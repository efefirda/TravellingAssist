import React from 'react';

import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Card } from '../../../components/card';
import { TextTitle, TextWithDetail } from '../../../components/text';
import Text from '../../../components/text/FontText';
import { Icon } from '../../../components/icon';

import stylesGlobal from '../../styles';

import IconPlane from '../../../assets/icons/plane.png';

const CardFlightInformation = ({
  departure,
  arrival,
  departureAirport,
  arrivalAirport,
  duration,
  flightNumber,
}) => {
  return (
    <View style={stylesGlobal.width100}>
      <TextTitle text="Flight Information"></TextTitle>
      <Card padding={15} widthCard="100%">
        <View
          style={[
            stylesGlobal.width100,
            stylesGlobal.row,
            stylesGlobal.marginBottom10,
          ]}
        >
          <View style={stylesGlobal.width40}>
            <Text style={[stylesGlobal.text10, stylesGlobal.greyColor]}>
              Departure
            </Text>
            <Text style={stylesGlobal.text16} type="bold">
              {departure}
            </Text>
          </View>
          <View style={[stylesGlobal.width20, stylesGlobal.center]}>
            <Icon source={IconPlane} color={stylesGlobal.$greyColor} />
          </View>
          <View style={stylesGlobal.width40}>
            <Text style={[stylesGlobal.text10, stylesGlobal.greyColor]}>
              Arrival
            </Text>
            <Text style={stylesGlobal.text16} type="bold">
              {arrival}
            </Text>
          </View>
        </View>

        <View
          style={[
            stylesGlobal.width100,
            stylesGlobal.row,
            stylesGlobal.marginBottom20,
          ]}
        >
          <View style={stylesGlobal.width40}>
            <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
              {departureAirport}
            </Text>
          </View>
          <View style={[stylesGlobal.width20, stylesGlobal.center]}>
            <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
              {duration}
            </Text>
          </View>
          <View style={stylesGlobal.width40}>
            <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
              {arrivalAirport}
            </Text>
          </View>
        </View>
        <View style={[stylesGlobal.width100, stylesGlobal.row]}>
          <View style={stylesGlobal.width40}>
            <TextWithDetail textTop="Date" textBottom="5 April 2019, 23:00" />
          </View>
          <View style={[stylesGlobal.width20, stylesGlobal.center]}>
            <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
              flight Number
            </Text>
            <Text>{flightNumber}</Text>
          </View>
          <View style={stylesGlobal.width40}>
            <TextWithDetail textTop="Date" textBottom="6 April 2019, 05:00" />
          </View>
        </View>
      </Card>
    </View>
  );
};

CardFlightInformation.propTypes = {
  departure: PropTypes.string,
  arrival: PropTypes.string,
  departureAirport: PropTypes.string,
  arrivalAirport: PropTypes.string,
  duration: PropTypes.string,
  flightNumber: PropTypes.string,
};

export default CardFlightInformation;
