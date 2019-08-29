import React from 'react';
import { View, ScrollView } from 'react-native';
import Text from '../../components/text/FontText';
import { Container } from '../../components/container';
import { TextWithIcon } from '../../components/text';

import stylesGlobal from '../styles';

import IconBullet from '../../assets/icons/circle.png';

const TermsAndCondition = () => {
  return (
    <Container>
      <ScrollView style={stylesGlobal.containerScroll}>
        <Container>
          <View
            style={[stylesGlobal.width100, stylesGlobal.paddingHorizontal20]}
          >
            <TextWithIcon
              text="Lorem Ipsum sit amet dolor"
              icon={IconBullet}
              iconSize={10}
              iconPosition="left"
            ></TextWithIcon>
            <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
              Lorem dalkjdas fskfks fkfsa sksjd frutoew viurfn afal fi
            </Text>
          </View>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default TermsAndCondition;
