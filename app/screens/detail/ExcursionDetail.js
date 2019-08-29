import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

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

const ExcursionDetail = () => {
  const navigation = useNavigation();

  //handle
  const handleDetailRoom = () => {
    return navigation.navigate('RoomDetail');
  };
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
              <TextTitle text="Hotel Name ABCDEFGH IJKLMNOPK RSTUVWXYZ"></TextTitle>
              <View
                style={[
                  stylesGlobal.width100,
                  stylesGlobal.row,
                  stylesGlobal.alignItemsCenter,
                  stylesGlobal.paddingVertical10,
                ]}
              >
                <Icon
                  source={IconStar}
                  color={stylesGlobal.$goldColor}
                  size={15}
                ></Icon>
                <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
                  Hotel
                </Text>

                <Icon
                  source={IconBullet}
                  color={stylesGlobal.$greyColor}
                  size={10}
                ></Icon>
                <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
                  Kuta
                </Text>
              </View>
              <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
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
              <View
                style={[
                  stylesGlobal.width100,
                  stylesGlobal.paddingVertical10,
                  stylesGlobal.row,
                ]}
              >
                <View style={stylesGlobal.width50}>
                  <TextWithDetail
                    textTop="Check-in"
                    textBottom="15 Des 2019"
                  ></TextWithDetail>
                  <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
                    Fri 24:00
                  </Text>
                </View>
                <View style={stylesGlobal.width50}>
                  <TextWithDetail
                    textTop="Check-out"
                    textBottom="15 Des 2019"
                  ></TextWithDetail>
                  <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
                    Fri 24:00
                  </Text>
                </View>
              </View>
              <SeperatorDashes
                width={10}
                height={1}
                color={stylesGlobal.$lightGreyColor}
                repeat={28}
              />
              <TextTitle
                text="Address"
                marginTop={10}
                marginBottom={20}
              ></TextTitle>
            </View>
            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={{ width: '100%', height: 200, marginBottom: 20 }}
            />

            <View
              style={[stylesGlobal.width100, stylesGlobal.paddingHorizontal20]}
            >
              <View
                style={[
                  stylesGlobal.width100,
                  stylesGlobal.row,
                  stylesGlobal.marginBotom10,
                ]}
              >
                <View style={[stylesGlobal.width20, stylesGlobal.center]}>
                  <Icon
                    source={IconStar}
                    size={25}
                    color={stylesGlobal.$goldColor}
                  ></Icon>
                </View>
                <View style={stylesGlobal.width80}>
                  <Text style={[stylesGlobal.text11, stylesGlobal.greyColor]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam malesuada imperdiet velit, vel suscipit erat tincidunt
                    et. Proin molestie, nulla non eleifend aliquet, nisl mi
                    venenatis libero.
                  </Text>
                </View>
              </View>
              <SeperatorDashes
                width={10}
                height={1}
                color={stylesGlobal.$lightGreyColor}
                repeat={28}
              />
              <TextTitle
                text="Services"
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
                <Button text="See all services" textColor="blue"></Button>
              </View>
              <SeperatorDashes
                width={10}
                height={1}
                color={stylesGlobal.$lightGreyColor}
                repeat={28}
              />
              <TextTitle
                marginTop={10}
                marginBottom={20}
                text="Location"
              ></TextTitle>
              <View style={[stylesGlobal.width100, stylesGlobal.row]}>
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
                <Button text="See all locations" textColor="blue"></Button>
              </View>
              <SeperatorDashes
                width={10}
                height={1}
                color={stylesGlobal.$lightGreyColor}
                repeat={28}
              />
              <TextTitle marginTop={10} text="Your Room"></TextTitle>
              <CardHotel
                image={ExamplaImage}
                title="Delux Room"
                rating={2}
                type="Double/Twin sharing"
                service="With Breakfast"
                onPress={() => handleDetailRoom()}
              ></CardHotel>
            </View>
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default ExcursionDetail;
