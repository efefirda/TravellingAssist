import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { TextWithIcon } from '../../../../components/text';
import Text from '../../../../components/text/FontText';
import { Icon } from '../../../../components/icon';
import { Card } from '../../../../components/card';
import stylesGlobal from '../../../styles';
import styles from '../../styles';

import IconDeparture from '../../../../assets/icons/departure.png';
import IconArrival from '../../../../assets/icons/arrival.png';
import IconWaring from '../../../../assets/icons/plane.png';

const CardDepartureAndArrival = ({ time, airport, flightNumber, type }) => {
  return (
    <View style={[stylesGlobal.width100, stylesGlobal.row]}>
      <View
        style={[
          stylesGlobal.width10,
          stylesGlobal.paddingTop20,
          stylesGlobal.alignItemsCenter,
        ]}
      >
        <Icon
          source={type == 'DEPARTURE' ? IconDeparture : IconArrival}
          size={20}
          color="#777"
          background="white"
        ></Icon>
      </View>
      <View style={stylesGlobal.width90}>
        <Card widthCard="100%">
          <View style={[stylesGlobal.width100, stylesGlobal.padding15]}>
            <Text size={10}>{time}</Text>
            <Text>{type == 'DEPARTURE' ? 'Departure' : 'Arrival'}</Text>
            <Text size={10}>
              {type == 'DEPARTURE' ? 'from' : 'at'} {airport}
            </Text>
            <Text size={10}>Flight Number: {flightNumber}</Text>
          </View>
          {type == 'ARRIVAL' ? (
            <View style={[stylesGlobal.width100, styles.waringArrival]}>
              <TextWithIcon
                icon={IconWaring}
                text="Air fares are not included"
                iconPosition="left"
              ></TextWithIcon>
            </View>
          ) : null}
        </Card>
      </View>
    </View>
  );
};

CardDepartureAndArrival.propTypes = {
  time: PropTypes.string,
  airport: PropTypes.string,
  flightNumber: PropTypes.string,
  type: PropTypes.string,
};

export default CardDepartureAndArrival;
