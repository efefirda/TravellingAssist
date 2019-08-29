import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Icon } from '../icon';

import stylesGlobal from '../../screens/styles';
import styles from './styles';

const TextWithIcon = ({
  icon,
  iconSize,
  text,
  iconPosition,
  colorIcon,
  colorText,
}) => {
  const textStyles = [styles.text];
  if (colorText) {
    textStyles.push({ color: colorText });
  }

  return iconPosition == 'bottom' ? (
    <View style={[stylesGlobal.width100, stylesGlobal.alignItemsCenter]}>
      <Icon source={icon} size={iconSize} color="#252525"></Icon>
      <Text style={stylesGlobal.text10}>{text}</Text>
    </View>
  ) : (
    <View
      style={[
        stylesGlobal.row,
        stylesGlobal.width100,
        stylesGlobal.alignItemsCenter,
      ]}
    >
      {iconPosition == 'left' ? (
        <View style={[stylesGlobal.width10, styles.transparent]}>
          <Icon source={icon} size={iconSize} color={colorIcon}></Icon>
        </View>
      ) : null}

      <View
        style={[
          stylesGlobal.width90,
          iconPosition == 'right' ? stylesGlobal.rightCenter : null,
        ]}
      >
        <Text style={[stylesGlobal.text11, textStyles]}>{text}</Text>
      </View>
      {iconPosition == 'right' ? (
        <View style={[stylesGlobal.width10, styles.transparent]}>
          <Icon source={icon} size={iconSize} color="white"></Icon>
        </View>
      ) : null}
    </View>
  );
};

TextWithIcon.propTypes = {
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  text: PropTypes.string,
  iconPosition: PropTypes.string,
  colorIcon: PropTypes.string,
  colorText: PropTypes.string,
};

export default TextWithIcon;
