import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import stylesGlobal from "../../screens/styles";

import Text from "../text/FontText";
import IconClose from "../../assets/icons/close.png";

const ButtonPick = props => {
  const { text, width, height, color, textColor, onPress, borderColor } = props;

  const buttonStyles = [styles.container];
  const textStyles = [styles.text];
  const imageStyles = [stylesGlobal.image];

  if (width) {
    buttonStyles.push({ width: width });
  }
  if (height) {
    buttonStyles.push({ height: height });
  }
  if (borderColor) {
    buttonStyles.push({
      borderColor: borderColor,
      borderWidth: 1
    });
  }
  if (color) {
    buttonStyles.push({ backgroundColor: color });
  }
  if (textColor) {
    textStyles.push({ color: textColor });
  }

  return (
    <View
      style={[
        buttonStyles,
        stylesGlobal.row,
        { padding: 5, paddingHorizontal: 10 },
        stylesGlobal.center
      ]}
      onPress={onPress}
    >
      <TouchableOpacity onPress={onPress}>
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={{ width: 20, height: 20, borderRadius: 20, padding: 5 }}
      >
        <Image source={IconClose} style={imageStyles} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

ButtonPick.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  borderColor: PropTypes.string
};

export default ButtonPick;
