import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';
import { ButtonTextWithIcon } from '../../../../components/button';
import Text from '../../../../components/text/FontText';
import { Icon } from '../../../../components/icon';
import { Card } from '../../../../components/card';

import stylesGlobal from '../../../styles';
import styles from '../../styles';

import IconExcursion from '../../../../assets/icons/excursion.png';
import IconRestaurant from '../../../../assets/icons/restaurant_black.png';
import IconWaring from '../../../../assets/icons/plane.png';

const CardExcursionAndRestaurant = ({ type, image, time, name, onPress }) => {
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
          source={type == 'MEAL' ? IconRestaurant : IconExcursion}
          size={20}
          color="#777"
          background="white"
        ></Icon>
      </View>
      <View style={stylesGlobal.width90}>
        <Card widthCard="100%" padding={15}>
          <View style={[stylesGlobal.width100, stylesGlobal.marginBottom10]}>
            <Text size={10}>{time}</Text>
            <Text>{name}</Text>
          </View>
          <View style={[stylesGlobal.width100, stylesGlobal.row]}>
            <View style={stylesGlobal.width30}>
              <View style={styles.containerImage50}>
                <Image
                  source={image}
                  style={stylesGlobal.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </View>
            <View style={stylesGlobal.width70}>
              <Text style={stylesGlobal.marginBottom10}>
                at Kuta - 2 Hour 15 Minutes
              </Text>
              <ButtonTextWithIcon
                text={type == 'MEAL' ? 'Detail Restaurant' : 'Detail Excursion'}
                icon={IconWaring}
                onPress={onPress}
                iconPosition="left"
                color="#6b82e6"
              ></ButtonTextWithIcon>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

CardExcursionAndRestaurant.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  time: PropTypes.string,
  name: PropTypes.string,
  onPress: PropTypes.func,
};

export default CardExcursionAndRestaurant;
