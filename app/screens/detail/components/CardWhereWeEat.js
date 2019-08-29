import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../../../components/text/FontText';
import { TextWithIcon, TextTitle } from '../../../components/text';
import { CardImage } from '../../../components/card';
import { Button } from '../../../components/button';
import { Icon } from '../../../components/icon';

import stylesGlobal from '../../styles';
import styles from '../styles';

import IconBullet from '../../../assets/icons/circle.png';
import IconExcursion from '../../../assets/images/excursion.png';
import IconNext from '../../../assets/icons/arrow_next.png';

const CardWhereWeEat = ({ image, restaurant, onPress }) => {
  return (
    <View style={stylesGlobal.width100}>
      <TextTitle text="Where we'll eat"></TextTitle>
      <View style={stylesGlobal.width100}>
        <CardImage image={image} heightCard={130}>
          <View style={stylesGlobal.width80}>
            <Text color="white">
              We bring you the finest restaurants across the globe
            </Text>
            {restaurant
              ? restaurant.map((item, index) => {
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
              text="See all restaurant"
              icon={IconNext}
              textColor="white"
              onPress={onPress}
            ></Button>
          </View>
        </CardImage>
        <View style={styles.containerIconOverlap}>
          <Icon source={IconExcursion} size={60} />
        </View>
      </View>
    </View>
  );
};

CardWhereWeEat.propTypes = {
  image: PropTypes.string,
  restaurant: PropTypes.object,
  onPress: PropTypes.func,
};
export default CardWhereWeEat;
