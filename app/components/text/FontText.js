import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import stylesFont from './styles';

const FontText = props => {
  const { type, children, style, size, color } = props;

  const setFontType = types => {
    switch (types) {
      case 'bold':
        return 'montserrat-bold';
      case 'semibold':
        return 'montserrat-semibold';
      default:
        return 'montserrat-medium';
    }
  };

  const textStyles = [stylesFont.text];
  if (size) {
    textStyles.push({ fontSize: size });
  }

  if (color) {
    textStyles.push({ color: color });
  }

  const font = setFontType(type ? type : 'normal');
  const styles = [{ fontFamily: font }, style, textStyles];
  return (
    <Text {...props} style={styles}>
      {children}
    </Text>
  );
};

FontText.propTypes = {
  style: PropTypes.any,
  children: PropTypes.any,
  type: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.number,
};

export default FontText;
