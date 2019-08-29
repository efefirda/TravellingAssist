import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { TextTitle, TextWithIcon } from '../../../components/text';
import Text from '../../../components/text/FontText';
import { Card } from '../../../components/card';
import { Icon } from '../../../components/icon';

import stylesGlobal from '../../styles';
import styles from '../styles';

import IconAdditional from '../../../assets/images/hotel.png';
import IconBullet from '../../../assets/icons/circle.png';

const CardTermsAndConditions = ({ termsAndConditionName, description }) => {
  return (
    <View style={stylesGlobal.width100}>
      <TextTitle text="Terms and Conditions"></TextTitle>
      <View style={stylesGlobal.width100}>
        <Card padding={15} widthCard="100%">
          <View style={stylesGlobal.width80}>
            <TextWithIcon
              icon={IconBullet}
              size={10}
              color="#252525"
              text={termsAndConditionName}
            ></TextWithIcon>
            <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
              {description}
            </Text>
          </View>
        </Card>

        <View style={styles.containerIconOverlap}>
          <Icon source={IconAdditional} size={60} />
        </View>
      </View>
    </View>
  );
};

CardTermsAndConditions.propTypes = {
  termsAndConditionName: PropTypes.string,
  description: PropTypes.string,
};

export default CardTermsAndConditions;
