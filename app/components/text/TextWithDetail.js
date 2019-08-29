import React from 'react';
import { View } from 'react-native';
import Text from './FontText';
import PropTypes from 'prop-types';
import styles from './styles';
import stylesGlobal from '../../screens/styles';

const TextWithDetail = ({ textTop, textBottom, inline }) => {
  return inline ? (
    <View
      style={[stylesGlobal.width100, stylesGlobal.row, styles.marginBottom5]}
    >
      <View style={stylesGlobal.width30}>
        <Text style={[stylesGlobal.text12, stylesGlobal.greyColor]}>
          {textTop}
        </Text>
      </View>
      <View style={stylesGlobal.width5}>
        <Text style={[stylesGlobal.text12, stylesGlobal.greyColor]}>:</Text>
      </View>
      <View style={stylesGlobal.width65}>
        <Text style={[stylesGlobal.text12, stylesGlobal.greyColor]}>
          {textBottom}
        </Text>
      </View>
    </View>
  ) : (
    <View style={stylesGlobal.width100}>
      <Text style={[stylesGlobal.text12, stylesGlobal.greyColor]}>
        {textTop}
      </Text>
      <Text>{textBottom}</Text>
    </View>
  );
};

TextWithDetail.propTypes = {
  textTop: PropTypes.string,
  textBottom: PropTypes.string,
  linear: PropTypes.bool,
};

export default TextWithDetail;
