import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Icon } from '../icon';

import stylesGlobal from '../../screens/styles';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonTextWithIcon = ({
  icon,
  iconSize,
  text,
  iconPosition,
  onPress,
  color,
}) => {
  const textStyles = [styles.text];
  if (color) {
    textStyles.push({ color: color });
  }

  return (
    <TouchableOpacity
      style={[
        stylesGlobal.row,
        stylesGlobal.width100,
        stylesGlobal.alignItemsCenter,
      ]}
      onPress={onPress}
    >
      {iconPosition == 'left' ? (
        <View style={[stylesGlobal.width10, styles.transparent]}>
          <Icon source={icon} size={iconSize} color={color}></Icon>
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
    </TouchableOpacity>
  );
};

ButtonTextWithIcon.propTypes = {
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  text: PropTypes.string,
  iconPosition: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string,
};

export default ButtonTextWithIcon;
