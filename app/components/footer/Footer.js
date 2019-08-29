import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

//styles
import styles from './styles';
import stylesGlobal from '../../screens/styles';

const Footer = ({ children }) => {
  return <View style={[stylesGlobal.width100, styles.footer]}>{children}</View>;
};

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
