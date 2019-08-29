import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { TextTitle } from '../../../components/text/FontText';
import Text from '../../../components/text/FontText';
import { Card } from '../../../components/card';
import { Icon } from '../../../components/icon';

import IconGuestList from '../../../assets/images/hotel.png';

import styles from '../styles';
import stylesGlobal from '../../styles';

const CardGuestList = ({ totalGuest, totalAdult, totalChild, totalInfant }) => {
  return (
    <View style={stylesGlobal.width100}>
      <TextTitle text="Guest List"></TextTitle>
      <View style={stylesGlobal.width100}>
        <Card padding={15} widthCard="100%">
          <View style={stylesGlobal.width80}>
            <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
              Total Guest : {totalGuest} Pax
            </Text>
            <Text>Adult({totalAdult} Pax)</Text>
            <Text>Adult({totalChild} Pax)</Text>
            <Text>Adult({totalInfant} Pax)</Text>
          </View>
        </Card>

        <View style={styles.containerIconOverlap}>
          <Icon source={IconGuestList} size={60} />
        </View>
      </View>
    </View>
  );
};

CardGuestList.propTypes = {
  totalGuest: PropTypes.number,
  totalAdult: PropTypes.number,
  totalChild: PropTypes.number,
  totalInfant: PropTypes.number,
};

export default CardGuestList;
