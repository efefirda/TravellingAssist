import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './styles';
import stylesGlobal from '../../screens/styles';
import PropTypes from 'prop-types';
import Text from '../text/FontText';
import { Icon } from '../icon';

const ButtonIcon = props => {
  const { onPress, icon, text, background, colorIcon } = props;

  const buttonStyles = [styles.buttonIcon];
  const imageStyles = [stylesGlobal.image];
  if (background) {
    buttonStyles.push({
      backgroundColor: background,
      borderRadius: 30,
      padding: 5,
    });
  }
  if (colorIcon) {
    imageStyles.push({ tintColor: colorIcon });
  }

  return (
    <TouchableOpacity style={[stylesGlobal.width100, stylesGlobal.row]}>
      <Icon size={15} source={icon} color={colorIcon} />
      {text ? <Text style={styles.alignTextCenter}>{text}</Text> : null}
    </TouchableOpacity>
  );
};

ButtonIcon.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.string,
  text: PropTypes.Text,
  background: PropTypes.string,
  colorIcon: PropTypes.string,
};

export default ButtonIcon;
