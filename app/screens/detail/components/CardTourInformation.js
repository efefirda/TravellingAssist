import React from 'react';
import { View, Image } from 'react-native';
import { Card } from '../../../components/card';
import Text from '../../../components/text/FontText';
import { SeperatorDashes } from '../../../components/seperator';
import { TextWithDetail } from '../../../components/text';

import stylesGlobal from '../../styles';
import styles from '../styles';

import PropTypes from 'prop-types';

const CardTourInformation = ({
  tourName,
  bookingNumber,
  tourDate,
  destination,
  image,
  travelAgentName,
  travelAgentEmail,
  travelAgentTelephone,
  travelAgentRegion,
}) => {
  return (
    <Card padding={15} widthCard="100%">
      <Text style={stylesGlobal.marginBottom20}>Tour Information</Text>
      <TextWithDetail inline textTop="Tour name" textBottom={tourName} />
      <TextWithDetail inline textTop="Booking No." textBottom={bookingNumber} />
      <TextWithDetail inline textTop="Tour date" textBottom={tourDate} />
      <TextWithDetail inline textTop="Destination" textBottom={destination} />
      <SeperatorDashes
        width={10}
        height={1}
        color={stylesGlobal.$lightGreyColor}
        repeat={28}
      />

      <Text style={stylesGlobal.marginBottom20}>Travel Agent</Text>
      <View style={[stylesGlobal.width100, stylesGlobal.row]}>
        <View style={[stylesGlobal.width30, styles.leftStart]}>
          <View style={styles.containerImage50}>
            <Image
              source={image}
              style={stylesGlobal.image}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={stylesGlobal.width70}>
          <TextWithDetail
            inline
            textTop="Travel agent"
            textBottom={travelAgentName}
          />
          <TextWithDetail
            inline
            textTop="Email"
            textBottom={travelAgentEmail}
          />
          <TextWithDetail
            inline
            textTop="Telephone"
            textBottom={travelAgentTelephone}
          />
          <TextWithDetail
            inline
            textTop="Region"
            textBottom={travelAgentRegion}
          />
        </View>
      </View>
    </Card>
  );
};

CardTourInformation.propTypes = {
  tourName: PropTypes.string,
  tourDate: PropTypes.string,
  bookingNumber: PropTypes.string,
  destination: PropTypes.string,
  image: PropTypes.string,
  travelAgentName: PropTypes.string,
  travelAgentEmail: PropTypes.string,
  travelAgentTelephone: PropTypes.string,
  travelAgentRegion: PropTypes.string,
};

export default CardTourInformation;
