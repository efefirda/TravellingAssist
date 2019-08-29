import React from 'react';
import { View } from 'react-native';

import { useNavigationParam } from 'react-navigation-hooks';
//components
import { TextWithIcon } from '../../components/text';
import { Container } from '../../components/container';

//styles
import stylesGlobal from '../styles';

//assets

import { ScrollView } from 'react-native-gesture-handler';
//helper
import {
  facilitiesAccommodation,
  locationAccommodation,
} from './helper/facilitiesAndFeatureshelper';

const ListAllServices = () => {
  const data = useNavigationParam('data');
  const status = useNavigationParam('status');
  return (
    <Container>
      <ScrollView style={stylesGlobal.containerScroll}>
        <View style={stylesGlobal.padding20}>
          <TextWithIcon
            icon={
              status == 'Fasilitas'
                ? facilitiesAccommodation()
                : locationAccommodation()
            }
            text="Oke"
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default ListAllServices;
