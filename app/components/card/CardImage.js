import React from 'react';
import { Image, View } from 'react-native';
import { Card } from '../../components/card';
import PropTypes from 'prop-types';

import stylesGlobal from '../../screens/styles';
import styles from './styles';

import { useNavigation } from 'react-navigation-hooks';

const CardImage = ({ image, children, heightCard, onPress, radius }) => {
  const navigation = useNavigation();
  const imageStyles = [styles.containerImage150];
  if (radius) {
    imageStyles.push({ borderRadius: radius });
  }

  return (
    <Card widthCard="100%" heightCard={heightCard} onPress={onPress}>
      <View style={[stylesGlobal.width100, imageStyles]}>
        <Image source={image} style={stylesGlobal.image}></Image>
      </View>
      <View style={styles.overlay}></View>
      <View style={styles.childrenImage}>{children}</View>
    </Card>
  );
};

CardImage.propTypes = {
  image: PropTypes.string,
  children: PropTypes.any,
  heightCard: PropTypes.number,
  radius: PropTypes.number,
  onPress: PropTypes.func,
};

export default CardImage;
