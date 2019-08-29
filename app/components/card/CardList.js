import React from 'react';
import { View, Image } from 'react-native';
import Card from './Card';
import TextWithDetail from '../text/TextWithDetail';
import Text from '../text/FontText';
import { ButtonIcon } from '../button';

import styles from './styles';
import stylesGlobal from '../../screens/styles';

import IconDownload from '../../assets/icons/download.png';
import IconBookmark from '../../assets/icons/bookmark.png';

import PropTypes from 'prop-types';

const CardList = ({ title, destination, date, image, onPress }) => {
  return (
    <Card widthCard="90%" onPress={onPress}>
      <View style={[stylesGlobal.width100, styles.containerImage]}>
        <Image source={image} style={stylesGlobal.image} resizeMode="contain" />
        <View style={styles.overlay} />
      </View>
      <View
        style={[
          stylesGlobal.width100,
          stylesGlobal.row,
          styles.containerText,
          stylesGlobal.paddingHorizontal10,
        ]}
      >
        <View style={stylesGlobal.width70}>
          <Text style={[stylesGlobal.text12, stylesGlobal.whiteColor]}>
            Booking No : 121323
          </Text>
        </View>
        <View
          style={[
            stylesGlobal.width30,
            stylesGlobal.row,
            stylesGlobal.paddingLeft10,
          ]}
        >
          <View style={[styles.marginRight10, stylesGlobal.padding5]}>
            <ButtonIcon
              icon={IconDownload}
              background="transparent"
              colorIcon="white"
            />
          </View>
          <View style={stylesGlobal.padding5}>
            <ButtonIcon
              icon={IconBookmark}
              background="transparent"
              colorIcon="white"
            />
          </View>
        </View>
      </View>
      <View
        style={[
          stylesGlobal.width100,
          stylesGlobal.paddingHorizontal10,
          stylesGlobal.paddingTop10,
        ]}
      >
        <Text>{title}</Text>
      </View>
      <View
        style={[
          stylesGlobal.width100,
          stylesGlobal.row,
          stylesGlobal.paddingHorizontal10,
          stylesGlobal.marginTop20,
          stylesGlobal.paddingBottom15,
        ]}
      >
        <View style={stylesGlobal.width50}>
          <TextWithDetail textTop="Destination" textBottom={destination} />
        </View>
        <View style={stylesGlobal.width50}>
          <TextWithDetail textTop="Date" textBottom={date} />
        </View>
      </View>
    </Card>
  );
};

CardList.propTypes = {
  title: PropTypes.string,
  destination: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
};
export default CardList;
