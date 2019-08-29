import React from 'react';
import { View, ScrollView, Image } from 'react-native';

import Text from '../../components/text/FontText';
import { Container } from '../../components/container';
import { SeperatorDashes } from '../../components/seperator';
import { TextTitle, TextWithDetail, TextWithIcon } from '../../components/text';
import { Button } from '../../components/button';
import { Icon } from '../../components/icon';
import CardHotel from '../shared/components/CardHotel';
import MapView from 'react-native-maps';

//assets
import ExamplaImage from '../../assets/images/des3.jpg';
import IconStar from '../../assets/icons/stars.png';
import IconBullet from '../../assets/icons/circle.png';

import styles from './styles';
import stylesGlobal from '../styles';

const RoomDetail = () => {
  return (
    <Container>
      <ScrollView style={stylesGlobal.containerScroll}>
        <Container>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          >
            <View style={styles.containerSlider100}>
              <Container>
                <Image
                  source={ExamplaImage}
                  style={stylesGlobal.image}
                  resizeMode="cover"
                ></Image>
              </Container>
            </View>
            <View style={styles.containerSlider100}>
              <Container>
                <Image
                  source={ExamplaImage}
                  style={stylesGlobal.image}
                  resizeMode="cover"
                ></Image>
              </Container>
            </View>
            <View style={styles.containerSlider100}>
              <Container>
                <Image
                  source={ExamplaImage}
                  style={stylesGlobal.image}
                  resizeMode="cover"
                ></Image>
              </Container>
            </View>
            <View style={styles.containerSlider100}>
              <Container>
                <Image
                  source={ExamplaImage}
                  style={stylesGlobal.image}
                  resizeMode="cover"
                ></Image>
              </Container>
            </View>
          </ScrollView>
          <Container marginTop={-50} color="transparent">
            <View
              style={[
                styles.containerDetail,
                stylesGlobal.width100,
                stylesGlobal.paddingHorizontal20,
              ]}
            >
              <TextTitle text="Deluxe Room"></TextTitle>
              <Text
                style={[
                  stylesGlobal.paddingBottom20,
                  stylesGlobal.text11,
                  stylesGlobal.greyColor,
                  stylesGlobal.marginTop20,
                ]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                malesuada imperdiet velit, vel suscipit erat tincidunt et. Proin
                molestie, nulla non eleifend aliquet, nisl mi venenatis libero,
                interdum maximus metus purus et velit.
              </Text>
              <View style={stylesGlobal.leftCenter}>
                <Button text="Read more" textColor="blue"></Button>
              </View>
              <SeperatorDashes
                width={10}
                height={1}
                color={stylesGlobal.$lightGreyColor}
                repeat={28}
              />
              <TextTitle
                text="Room Amenities"
                marginTop={10}
                marginBottom={20}
              ></TextTitle>
              <View
                style={[
                  stylesGlobal.width100,
                  stylesGlobal.row,
                  stylesGlobal.marginBotom10,
                ]}
              >
                <View style={stylesGlobal.width20}>
                  <TextWithIcon
                    text="Location A"
                    icon={IconBullet}
                    iconSize={30}
                    iconPosition="bottom"
                  ></TextWithIcon>
                </View>
                <View style={stylesGlobal.width20}>
                  <TextWithIcon
                    text="Location A"
                    icon={IconBullet}
                    iconSize={30}
                    iconPosition="bottom"
                  ></TextWithIcon>
                </View>
                <View style={stylesGlobal.width20}>
                  <TextWithIcon
                    text="Location A"
                    icon={IconBullet}
                    iconSize={30}
                    iconPosition="bottom"
                  ></TextWithIcon>
                </View>
                <View style={stylesGlobal.width20}>
                  <TextWithIcon
                    text="Location A"
                    icon={IconBullet}
                    iconSize={30}
                    iconPosition="bottom"
                  ></TextWithIcon>
                </View>
                <View style={stylesGlobal.width20}>
                  <TextWithIcon
                    text="Location A"
                    icon={IconBullet}
                    iconSize={30}
                    iconPosition="bottom"
                  ></TextWithIcon>
                </View>
              </View>
              <View style={stylesGlobal.leftCenter}>
                <Button text="See all room amenities" textColor="blue"></Button>
              </View>

              <TextTitle marginTop={10} text="Service"></TextTitle>
              <Text style={stylesGlobal.text10}>With Breakfast</Text>
            </View>
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default RoomDetail;
