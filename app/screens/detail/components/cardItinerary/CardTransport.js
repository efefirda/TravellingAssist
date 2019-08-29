import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { TextWithIcon } from '../../../../components/text';
import Text from '../../../../components/text/FontText';
import { Icon } from '../../../../components/icon';
import { Card } from '../../../../components/card';

import stylesGlobal from '../../../styles';

import IconTransport from '../../../../assets/icons/transfer.png';
import IconBullet from '../../../../assets/icons/circle.png';

const CardTransport = ({ time, duration, vehicle, city, from, to, type }) => {
  return (
    <View style={stylesGlobal.width100}>
      <View style={[stylesGlobal.width100, stylesGlobal.row]}>
        <View
          style={[
            stylesGlobal.width10,
            stylesGlobal.paddingTop20,
            stylesGlobal.alignItemsCenter,
          ]}
        >
          <Icon
            source={IconTransport}
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
                <Text>
                  {type == 'DRIVING' ? 'Self Transportation' : 'Trip by Car'}
                </Text>
              </View>
              <View style={stylesGlobal.width50}>
                <Text>{duration}</Text>
              </View>
            </View>

            <View style={stylesGlobal.width100}>
              <Text size={10}>With {vehicle}</Text>
              <Text size={10}>at {city}</Text>
              <TextWithIcon
                icon={IconBullet}
                text={from}
                colorIcon="red"
                iconPosition="left"
              />
              <TextWithIcon
                icon={IconBullet}
                text={to}
                colorIcon="green"
                iconPosition="left"
              />
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};

CardTransport.propTypes = {
  time: PropTypes.string,
  duration: PropTypes.string,
  vehicle: PropTypes.string,
  city: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string,
};

export default CardTransport;
