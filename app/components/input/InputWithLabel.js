import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import stylesGlobal from '../../screens/styles';

import Text from '../text/FontText';

import IconEye from '../../assets/icons/eye.png';
import IconEyeSlash from '../../assets/icons/eye_slash.png';

const InputWithLabel = props => {
  const {
    label,
    placeholder,
    value,
    rightLabel,
    onPressRightLabel,
    password,
    multiline,
    numberOfLines,
    height,
    error,
    width,
    disable,
    disableInput,
    labelColor,
    labelBold,
  } = props;

  const inputStyles = [styles.input];
  if (height) {
    inputStyles.push({ height: height, justifyContent: 'flex-start' });
  }
  if (width) {
    inputStyles.push({ width: width });
  }
  if (disableInput == 'disable') {
    inputStyles.push({ backgroundColor: styles.$disabelColor });
  }

  const textStyles = [styles.text];
  if (labelColor) {
    textStyles.push({ color: labelColor });
  }
  if (labelBold) {
    textStyles.push({ fontWeight: 'bold' });
  }

  const [state, setState] = useState({
    isFocused: false,
    animatedIsFocused: new Animated.Value(value ? 1 : 0),
    icEye: 'visibility-off',
    password: true,
  });

  const changePwdType = () => {
    if (state.password) {
      setState({ ...state, icEye: IconEye, password: false });
    } else {
      setState({ ...state, icEye: IconEyeSlash, password: true });
    }
  };

  useEffect(() => {
    Animated.timing(state.animatedIsFocused, {
      toValue: state.isFocused || value ? 1 : 0,
      duration: 200,
    }).start();
  });

  const handleFocus = () => setState({ ...state, isFocused: true });
  const handleBlur = () => setState({ ...state, isFocused: false });

  return (
    <View style={stylesGlobal.width100}>
      {rightLabel ? (
        <View style={[stylesGlobal.row, stylesGlobal.width100]}>
          <View style={stylesGlobal.width50}>
            <Text style={textStyles}>{label}</Text>
          </View>
          <TouchableOpacity
            onPress={onPressRightLabel}
            style={[stylesGlobal.width50, stylesGlobal.rightCenter]}
          >
            <Text style={[styles.text, styles.textForgot]} type="bold">
              {rightLabel}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={textStyles}>{label}</Text>
      )}
      <View style={inputStyles}>
        {password ? (
          <View>
            <TextInput
              {...props}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}
              blurOnSubmit
              underlineColorAndroid="transparent"
              secureTextEntry={state.password}
              placeholder={placeholder}
            />
            <TouchableOpacity
              onPress={() => changePwdType()}
              style={[styles.containerIconEye, styles.iconEye]}
            >
              <Image
                style={stylesGlobal.image}
                source={state.icEye}
                styles={{ tintColor: '#343434' }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TextInput
            {...props}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            blurOnSubmit
            underlineColorAndroid="transparent"
            placeholder={placeholder}
            multiline={multiline}
            numberOfLines={numberOfLines}
            editable={disable}
            selectTextOnFocus={disable}
          />
        )}
        <Text style={styles.ErrorMessage}>{error}</Text>
      </View>
    </View>
  );
};

InputWithLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  rightLabel: PropTypes.string,
  password: PropTypes.bool,
  onPressRightLabel: PropTypes.func,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  height: PropTypes.number,
  error: PropTypes.string,
  width: PropTypes.string,
  disable: PropTypes.bool,
  disableInput: PropTypes.string,
  labelColor: PropTypes.string,
  labelBold: PropTypes.bool,
};

export default InputWithLabel;
