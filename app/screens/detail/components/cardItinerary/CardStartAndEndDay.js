import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import Text from '../../../../components/text/FontText';
import { Card } from '../../../../components/card';
import { Icon } from '../../../../components/icon';

import stylesGlobal from '../../../styles';
import IconStartDay from '../../../../assets/icons/sun.png';
import IconEndDay from '../../../../assets/icons/moon.png';

const CardStartAndEndDay = ({ time, city, type }) => {
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
          source={type == 'STARTDAY' ? IconStartDay : IconEndDay}
          size={20}
          color="#777"
          background=""
        ></Icon>
      </View>
      <View style={stylesGlobal.width90}>
        <Card widthCard="100%" padding={15}>
          <View style={[stylesGlobal.width100, stylesGlobal.row]}>
            <View style={stylesGlobal.width50}>
              <Text size={10}>{time}</Text>
              <Text>Start Day</Text>
            </View>
            <View style={[stylesGlobal.width50, stylesGlobal.rightStart]}>
              <Text>at {city}</Text>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

CardStartAndEndDay.propTypes = {
  time: PropTypes.string,
  city: PropTypes.string,
  type: PropTypes.string,
};

export default CardStartAndEndDay;
