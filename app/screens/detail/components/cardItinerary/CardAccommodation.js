import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';
import Text from '../../../../components/text/FontText';
import { Card } from '../../../../components/card';
import { Icon } from '../../../../components/icon';
import { ButtonTextWithIcon } from '../../../../components/button';

import stylesGlobal from '../../../styles';
import styles from '../../styles';

import IconCheckIn from '../../../../assets/icons/checin.png';
import IconCheckOut from '../../../../assets/icons/checout.png';
import IconLeaveAccommodation from '../../../../assets/icons/leave.png';
import IconReturnAccommodation from '../../../../assets/icons/return.png';
import IconWarning from '../../../../assets/icons/stars.png';

const CardAccommodation = ({ time, city, image, name, type, onPress }) => {
  const setIcon = types => {
    switch (types) {
      case 'CHECKIN':
        return IconCheckIn;
      case 'CHECKOUT':
        return IconCheckOut;
      case 'RETURN':
        return IconReturnAccommodation;
      case 'LEAVE':
        return IconLeaveAccommodation;
      default:
        return IconCheckIn;
    }
  };

  const setTitle = types => {
    switch (types) {
      case 'CHECKIN':
        return 'Check In';
      case 'CHECKOUT':
        return 'Check Out';
      case 'RETURN':
        return 'Return Accommodation';
      case 'LEAVE':
        return 'Leave Accommodation';
      default:
        return 'Check In';
    }
  };

  const icon = setIcon(type);

  const title = setTitle(type);

  return (
    <View style={[stylesGlobal.width100, stylesGlobal.row]}>
      <View
        style={[
          stylesGlobal.width10,
          stylesGlobal.paddingTop20,
          stylesGlobal.alignItemsCenter,
        ]}
      >
        <Icon source={icon} size={20} color="#777" background="white"></Icon>
      </View>
      <View style={stylesGlobal.width90}>
        <Card widthCard="100%" padding={15}>
          <View style={[stylesGlobal.width100, stylesGlobal.row]}>
            <View style={stylesGlobal.width50}>
              <Text size={10}>{time}</Text>
              <Text>{title}</Text>
            </View>
            <View style={[stylesGlobal.width50, stylesGlobal.rightStart]}>
              <Text>at {city}</Text>
            </View>
          </View>
          <View style={[stylesGlobal.width100, stylesGlobal.row]}>
            <View style={stylesGlobal.width30}>
              <View style={styles.containerImage50}>
                <Image
                  source={image}
                  style={stylesGlobal.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </View>
            <View style={stylesGlobal.width70}>
              <Text>{name}</Text>
              <ButtonTextWithIcon
                text="Detail Accommodation"
                icon={IconWarning}
                onPress={onPress}
                iconPosition="left"
                color="#6b82e6"
              ></ButtonTextWithIcon>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

CardAccommodation.propTypes = {
  time: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  type: PropTypes.string,
};
export default CardAccommodation;
