import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { CardImage } from '../../../components/card';

import Text from '../../../components/text/FontText';
import { TextWithIcon, TextTitle } from '../../../components/text';
import { Icon } from '../../../components/icon';
import { Button } from '../../../components/button';

import stylesGlobal from '../../styles';
import styles from '../styles';

import IconBullet from '../../../assets/icons/circle.png';
import IconNext from '../../../assets/icons/arrow_next.png';
import IconHotel from '../../../assets/images/hotel.png';

const CardWhereWeStay = ({ image, onPress, accommodation }) => {
  return (
    <View style={stylesGlobal.width100}>
      <TextTitle text="Where we'll stay"></TextTitle>
      <View style={stylesGlobal.width100}>
        <CardImage image={image} heightCard={130}>
          <View style={stylesGlobal.width80}>
            <Text color="white">
              Stay at star hotels selected by our expert
            </Text>
            {accommodation
              ? accommodation.map((item, index) => {
                  return (
                    <TextWithIcon
                      key={index}
                      text={item.Name}
                      icon={IconBullet}
                      iconSize={20}
                      iconPosition="left"
                      colorText="white"
                    ></TextWithIcon>
                  );
                })
              : null}
          </View>
          <View style={[stylesGlobal.rightCenter, stylesGlobal.width100]}>
            <Button
              text="See all hotel"
              icon={IconNext}
              textColor="white"
              onPress={onPress}
            ></Button>
          </View>
        </CardImage>
        <View style={styles.containerIconOverlap}>
          <Icon source={IconHotel} size={60} />
        </View>
      </View>
    </View>
  );
};

CardWhereWeStay.propTypes = {
  image: PropTypes.string,
  onPress: PropTypes.string,
  accommodation: PropTypes.object,
};

export default CardWhereWeStay;
