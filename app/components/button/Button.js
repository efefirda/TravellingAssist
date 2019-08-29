import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Text from '../text/FontText';
import { Icon } from '../icon';

const Button = props => {
  const {
    text,
    width,
    height,
    color,
    textColor,
    onPress,
    borderColor,
    icon,
  } = props;

  const buttonStyles = [styles.container];
  const textStyles = [styles.text];

  if (width) {
    buttonStyles.push({ width: width });
  }

  if (height) {
    buttonStyles.push({ height: height });
  }

  if (borderColor) {
    buttonStyles.push({
      borderColor: borderColor,
      borderWidth: 1,
    });
  }

  if (color) {
    buttonStyles.push({ backgroundColor: color });
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text color={textColor}>{text}</Text>

      {icon ? <Icon source={icon} size={15} color="white"></Icon> : null}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  borderColor: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
