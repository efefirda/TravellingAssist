import React from 'react';
import { View, Image } from 'react-native';
import Text from '../../../components/text/FontText';
import { Card } from '../../../components/card';
import { Icon } from '../../../components/icon';
import { Button } from '../../../components/button';

import styles from '../styles';
import stylesGlobal from '../../styles';
import PropTypes from 'prop-types';

const CardExcursion = ({ title, visitDate, description, image, onPress }) => {
  return (
    <Card widthCard="100%">
      <View style={[stylesGlobal.width100, stylesGlobal.row]}>
        <View style={[stylesGlobal.width30, styles.containerImageHotel]}>
          <Image
            style={styles.imageCardList}
            source={image}
            resizeMode="cover"
          />
        </View>
        <View style={[stylesGlobal.width70, stylesGlobal.padding10]}>
          <Text>{title}</Text>

          <Text
            style={[
              stylesGlobal.paddingVertical10,
              stylesGlobal.text11,
              stylesGlobal.greyColor,
            ]}
          >
            {visitDate}
          </Text>

          <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
            {description}
          </Text>

          <View style={[stylesGlobal.width100, stylesGlobal.rightCenter]}>
            <Button
              text="See Detail"
              onPress={onPress}
              textColor="blue"
            ></Button>
          </View>
        </View>
      </View>
    </Card>
  );
};

CardExcursion.propTypes = {
  title: PropTypes.string,
  visitDate: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
};

export default CardExcursion;
