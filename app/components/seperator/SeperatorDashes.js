import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import stylesGlobal from '../../screens/styles';

import styles from './styles';

const SeperatorDashes = ({ repeat, width, color, height }) => {
  const separstyle = [styles.seperatorDashes];

  if (width) {
    separstyle.push({ width: width });
  }
  if (color) {
    separstyle.push({ backgroundColor: color });
  }
  if (height) {
    separstyle.push({ height: height });
  }
  let seperator = new Array(repeat).fill(0);

  return (
    <View
      style={[stylesGlobal.width100, stylesGlobal.row, stylesGlobal.hidden]}
    >
      {seperator.map(i => {
        {
          return <View key={i} style={separstyle} />;
        }
      })}
    </View>
  );
};

SeperatorDashes.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  height: PropTypes.number,
  repeat: PropTypes.number,
};

export default SeperatorDashes;
