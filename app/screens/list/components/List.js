import React from 'react';
import { View, ScrollView } from 'react-native';
import { Container } from '../../../components/container';
import { TextWithDetail } from '../../../components/text';
import stylesGlobal from '../../styles';

import PropTypes from 'prop-types';

const List = ({ children }) => {
  return (
    <Container paddingTop={20}>
      <ScrollView
        style={[stylesGlobal.containerScroll, stylesGlobal.paddingHorizontal20]}
      >
        <Container>
          <TextWithDetail
            inline
            textTop="Tour name"
            textBottom="Booking name lorem ipsum dolor sit amet, consdkaskd isads swlisj"
          ></TextWithDetail>
          <TextWithDetail
            inline
            textTop="Booking No"
            textBottom="ABCD EFHGL"
          ></TextWithDetail>

          {children}
        </Container>
      </ScrollView>
    </Container>
  );
};

List.PropTypes = {
  children: PropTypes.any,
};

export default List;
