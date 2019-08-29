import React from 'react';
import { View } from 'react-native';
import stylesGlobal from '../../screens/styles';
import PropTypes from 'prop-types';
import Text from './FontText';

const TextTitle = ({ text, marginTop, marginBottom }) => {
  const marginStyles = [stylesGlobal.leftCenter];
  if (marginTop) {
    marginStyles.push({ marginTop: marginTop });
  }
  if (marginBottom) {
    marginStyles.push({ marginBottom: marginBottom });
  }
  return (
    <View
      style={[stylesGlobal.leftCenter, stylesGlobal.width100, marginStyles]}
    >
      <Text type="bold" style={stylesGlobal.text16}>
        {text}
      </Text>
    </View>
  );
};

TextTitle.propTypes = {
  text: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
};

export default TextTitle;
