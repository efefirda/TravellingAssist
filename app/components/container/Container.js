import React from "react";
import PropTypes from "prop-types";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "./styles";

const Container = ({
  children,
  paddingBottom,
  color,
  paddingHorizontal,
  paddingTop,
  marginTop
}) => {
  const containerStyles = [styles.container];
  if (paddingBottom) {
    containerStyles.push({ paddingBottom: paddingBottom });
  }
  if (marginTop) {
    containerStyles.push({ marginTop: marginTop });
  }
  if (paddingTop) {
    containerStyles.push({ paddingTop: paddingTop });
  }
  if (color) {
    containerStyles.push({ backgroundColor: color });
  }
  if (paddingHorizontal) {
    containerStyles.push({ paddingHorizontal: paddingHorizontal });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  paddingBottom: PropTypes.number,
  paddingTop: PropTypes.number,
  color: PropTypes.string,
  paddingHorizontal: PropTypes.number,
  marginTop: PropTypes.number
};

export default Container;
