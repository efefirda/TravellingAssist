import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import stylesGlobal from '../../screens/styles';

const Card = ({
  children,
  widthCard,
  heightCard,
  padding,
  radiusBorder,
  onPress,
}) => {
  const cardStyles = [styles.cardContainer];

  if (widthCard) {
    cardStyles.push({ width: widthCard });
  }
  if (heightCard) {
    cardStyles.push({ height: heightCard });
  }
  if (padding) {
    cardStyles.push({ padding: padding });
  }
  if (radiusBorder) {
    cardStyles.push({ borderRadius: radiusBorder });
  }

  return (
    <View style={cardStyles}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>{children}</View>
      </TouchableWithoutFeedback>
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  widthCard: PropTypes.string,
  heightCard: PropTypes.number,
  padding: PropTypes.number,
  onPress: PropTypes.func,
  radiusBorder: PropTypes.number,
};

export default Card;
