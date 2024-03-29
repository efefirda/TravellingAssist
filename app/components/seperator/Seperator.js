import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const Seperator = ({ color, width, thickness }) => {
  const seperatorStyles = [styles.seperator];
  if (color) {
    seperatorStyles.push({ backgroundColor: color });
  }
  if (width) {
    seperatorStyles.push({ width: width });
  }
  if (thickness) {
    seperatorStyles.push({ height: thickness });
  }

  return <View style={seperatorStyles}></View>;
};

Seperator.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  thickness: PropTypes.number,
};

export default Seperator;
