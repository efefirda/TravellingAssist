import React from 'react';
import { View, Image } from 'react-native';
import Text from '../../../components/text/FontText';
import { Card } from '../../../components/card';
import { Icon } from '../../../components/icon';
import { Button } from '../../../components/button';

import styles from './styles';
import stylesGlobal from '../../styles';
import PropTypes from 'prop-types';

import IconStar from '../../../assets/icons/stars.png';
import IconBullet from '../../../assets/icons/circle.png';
import { TextWithDetail } from '../../../components/text';

const CardHotel = ({
  title,
  rating,
  type,
  service,
  confirmationNumber,
  room,
  checkIn,
  checkOut,
  image,
  onPress,
}) => {
  return (
    <Card widthCard="100%">
      <View style={[stylesGlobal.width100, stylesGlobal.row]}>
        <View style={[stylesGlobal.width30, styles.containerImageHotel]}>
          <Image
            style={styles.imageCardList}
            source={image}
            resizeMode="cover"
          />
        </View>
        <View style={[stylesGlobal.width70, stylesGlobal.padding10]}>
          <Text>{title}</Text>
          <View
            style={[
              stylesGlobal.width100,
              stylesGlobal.row,
              stylesGlobal.alignItemsCenter,
            ]}
          >
            <Icon
              source={IconStar}
              color={stylesGlobal.$goldColor}
              size={15}
            ></Icon>
            <Icon
              source={IconBullet}
              color={stylesGlobal.$greyColor}
              size={15}
            ></Icon>
            <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
              {type}
            </Text>
          </View>
          {service ? (
            <TextWithDetail
              textTop="Service"
              textBottom={service}
              inline
            ></TextWithDetail>
          ) : null}

          {confirmationNumber ? (
            <TextWithDetail
              textTop="Confirmation No."
              textBottom={confirmationNumber}
              inline
            ></TextWithDetail>
          ) : null}

          {room ? (
            <TextWithDetail
              textTop="Room"
              textBottom={room}
              inline
            ></TextWithDetail>
          ) : null}

          {checkIn ? (
            <TextWithDetail
              textTop="Check-in"
              textBottom={checkIn}
              inline
            ></TextWithDetail>
          ) : null}

          {checkOut ? (
            <TextWithDetail
              textTop="Check-out"
              textBottom={checkOut}
              inline
            ></TextWithDetail>
          ) : null}

          <View style={[stylesGlobal.width100, stylesGlobal.rightCenter]}>
            <Button
              text="See Detail"
              onPress={onPress}
              textColor="blue"
            ></Button>
          </View>
        </View>
      </View>
    </Card>
  );
};

CardHotel.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  type: PropTypes.string,
  service: PropTypes.string,
  confirmationNumber: PropTypes.string,
  room: PropTypes.string,
  checkIn: PropTypes.string,
  checkOut: PropTypes.string,
};

export default CardHotel;
