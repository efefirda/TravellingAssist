import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import Text from '../../../../components/text/FontText';
import { Card } from '../../../../components/card';
import { Icon } from '../../../../components/icon';

import stylesGlobal from '../../../styles';
import IconQueue from '../../../../assets/icons/passport.png';
import IconTransit from '../../../../assets/icons/plane.png';

const CardQueueAndTransit = ({ time, city, duration, type }) => {
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
          source={type == 'QUEUETIME' ? IconQueue : IconTransit}
          size={20}
          color="#777"
          background="white"
        ></Icon>
      </View>
      <View style={stylesGlobal.width90}>
        <Card widthCard="100%" padding={15}>
          <View style={[stylesGlobal.width100, stylesGlobal.row]}>
            <View style={stylesGlobal.width50}>
              <Text size={10}>{time}</Text>
              <Text>{type == 'QUEUETIME' ? 'Queue Time' : 'Transit'}</Text>
            </View>
            <View style={[stylesGlobal.width50, stylesGlobal.rightStart]}>
              <Text>at {city}</Text>
              <Text>{duration}</Text>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

CardQueueAndTransit.propTypes = {
  time: PropTypes.string,
  city: PropTypes.string,
  duration: PropTypes.string,
  type: PropTypes.string,
};

export default CardQueueAndTransit;
