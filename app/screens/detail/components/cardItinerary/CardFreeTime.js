import React from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity } from 'react-native';
import Text from '../../../../components/text/FontText';
import { Card } from '../../../../components/card';
import { Icon } from '../../../../components/icon';

import stylesGlobal from '../../../styles';
import IconFreeTime from '../../../../assets/icons/clock.png';

const CardFreeTime = ({ time, city, duration, note }) => {
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
          source={IconFreeTime}
          size={20}
          color="#777"
          background="white"
        ></Icon>
      </View>
      <View style={stylesGlobal.width90}>
        <Card widthCard="100%" padding={15}>
          <View style={stylesGlobal.width100}>
            <Text size={10}>{time}</Text>
            <Text>Free Time</Text>
          </View>
          <View style={stylesGlobal.width100}>
            <Text size={11}>
              at {city} - {duration}
            </Text>
            <Text size={12}>Note</Text>
            <Text size={12}>{note}</Text>
            <TouchableOpacity
              style={[stylesGlobal.width100, stylesGlobal.righ]}
            >
              <Text size={12}>Read more</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </View>
  );
};

CardFreeTime.propTypes = {
  time: PropTypes.string,
  city: PropTypes.string,
  duration: PropTypes.string,
  note: PropTypes.string,
};

export default CardFreeTime;
