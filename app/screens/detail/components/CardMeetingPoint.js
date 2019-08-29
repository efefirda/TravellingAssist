import React from 'react';

import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from '../../../components/card';
import Text from '../../../components/text/FontText';
import { TextTitle } from '../../../components/text';
import { Icon } from '../../../components/icon';

import stylesGlobal from '../../styles';
import styles from '../styles';

import IconMeetingPoint from '../../../assets/images/meeting_point.png';

const CardMeetingPoint = ({ description }) => {
  return (
    <View style={stylesGlobal.width100}>
      <TextTitle text="Meeting Point Information"></TextTitle>
      <View style={stylesGlobal.width100}>
        <Card padding={15} widthCard="100%">
          <View style={stylesGlobal.width80}>
            <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
              {description}
            </Text>
          </View>
        </Card>

        <View style={styles.containerIconOverlap}>
          <Icon source={IconMeetingPoint} size={60} />
        </View>
      </View>
    </View>
  );
};

CardMeetingPoint.PropTypes = {
  description: PropTypes.string,
};

export default CardMeetingPoint;
