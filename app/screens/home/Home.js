import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector, useDispatch } from 'react-redux';

//component
import {
  Image,
  View,
  Modal,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Container } from '../../components/container';
import Text from '../../components/text/FontText';
import { Footer } from '../../components/footer';
import { ButtonIcon, Button, ButtonPick } from '../../components/button';
import { InputWithLabel } from '../../components/input';
import { CheckBox } from 'react-native-elements';
import { CardList } from '../../components/card';

//asset
import NoImage from '../../assets/images/NoImage.png';
import IconSearch from '../../assets/icons/magnifier.png';
import IconClose from '../../assets/icons/close.png';

//styles
import styles from './styles';
import stylesGlobal from '../../screens/styles';

//action
import { get_booking_detail } from '../shared/actions/bookingDetailAction';

//helper
import { viewStringDate } from '../../services/helper/timeHelper';

const Home = () => {
  const dispatch = useDispatch();
  // const getList = (id, lastName) => dispatch(get_booking_detail(id, lastName));

  //state
  const [modalVisible, setModalVisible] = useState(false);
  const [bookingNumber, setBookingNumber] = useState(null);
  const [isSavedSearch, setIsSaveSearch] = useState(false);
  const [lastName, setLastName] = useState(null);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const detail = useSelector(state => state.bookingDetailReducer.bookingDetail);

  const getAllData = async () => {
    // getBookingDetailApi('0QVCDC', 'Tba').then(response => {
    //   setList(response.data);
    //   setLoading(false);
    // });
    dispatch(get_booking_detail('0QVCDC', 'Tba')).then(res => {
      setList(res.bookingDetail);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  console.log('INI ISINYA APA SIH', detail.BookingDetailSum);

  //handle
  const navigation = useNavigation();
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleDetail = () => {
    navigation.navigate('TourDetail');
  };

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Container style={stylesGlobal.width100}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              handleCloseModal();
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <View style={stylesGlobal.closeModal}>
                  <ButtonIcon
                    icon={IconClose}
                    background="white"
                    colorIcon={stylesGlobal.$redColor}
                    onPress={() => handleCloseModal()}
                  />
                </View>
                <Text
                  style={[stylesGlobal.text16, stylesGlobal.marginBottom20]}
                  type="semi-bold"
                >
                  Input Booking Number
                </Text>
                <InputWithLabel
                  label="Booking Number"
                  placeholder="Input your booking number"
                  textColor="black"
                  width="100%"
                  height={45}
                  value={bookingNumber}
                  onChangeText={text => setBookingNumber(text)}
                  // error={errorValidate.errorCompanyCode}
                  // keyboardType="numeric"
                />
                <View
                  style={[
                    stylesGlobal.width100,
                    stylesGlobal.row,
                    stylesGlobal.marginTop20,
                  ]}
                >
                  <ButtonPick
                    text="98738hkjs"
                    color={stylesGlobal.$lightGreyColor}
                    height={30}
                  />
                </View>
                <Text style={[stylesGlobal.text11, stylesGlobal.paddingTop10]}>
                  Booking number akan anda dapatkan dari travel agent anda
                </Text>
                <InputWithLabel
                  label="Your Last Name"
                  placeholder="Input your last name"
                  textColor="black"
                  width="100%"
                  height={45}
                  value={lastName}
                  onChangeText={text => setLastName(text)}
                />
                <CheckBox
                  title="Remember this booking number"
                  checked={isSavedSearch}
                  uncheckedIcon="square-o"
                  onPress={() => setIsSaveSearch(true)}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={stylesGlobal.text11}
                  fontFamily="montserrat-medium"
                />
                <View style={[stylesGlobal.width100, stylesGlobal.center]}>
                  <Text style={[stylesGlobal.text11, stylesGlobal.yellowColor]}>
                    Booking Number ABC123 or last name not exist. Please contact
                    your travel agent to get your Booking Number
                  </Text>
                </View>
                <View
                  style={[
                    stylesGlobal.width100,
                    stylesGlobal.center,
                    stylesGlobal.marginTop20,
                  ]}
                >
                  <Button
                    text="Search"
                    color={stylesGlobal.$goldColor}
                    textColor={stylesGlobal.$blackColor}
                    width="60%"
                    height={35}
                    onPress={() => handleOK()}
                  />
                </View>
              </View>
            </View>
          </Modal>

          {detail ? (
            <ScrollView style={[stylesGlobal.containerScroll]}>
              <Container>
                <CardList
                  title={
                    detail.BookingDetailSum.Title
                      ? detail.BookingDetailSum.Title
                      : 'Hotel'
                  }
                  image={NoImage}
                  destination={
                    detail.BookingDetailSum.City
                      ? detail.BookingDetailSum.City.Name +
                        ', ' +
                        detail.BookingDetailSum.Country.Name
                      : ''
                  }
                  date={
                    detail.BookingDetailSum.StartDate
                      ? viewStringDate(detail.BookingDetailSum.StartDate)
                      : ''
                  }
                  onPress={() => handleDetail()}
                />
              </Container>
            </ScrollView>
          ) : (
            <View style={stylesGlobal.center}>
              <Text>Hi and Welcome</Text>
              <View style={styles.containerImage300}>
                <Image
                  source={NoImage}
                  style={stylesGlobal.image}
                  resizeMode="contain"
                />
              </View>
              <Text style={[stylesGlobal.text11, stylesGlobal.padding20]}>
                Lorem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum
                dolor sit amet orem ipsum dolor sit amet
              </Text>
            </View>
          )}

          <Footer>
            <View style={[stylesGlobal.row, stylesGlobal.width100]}>
              <View style={[stylesGlobal.width50, stylesGlobal.rightCenter]}>
                <Text>Search Tour</Text>
              </View>
              <View
                style={[
                  stylesGlobal.width50,
                  stylesGlobal.leftCenter,
                  stylesGlobal.paddingLeft30,
                ]}
              >
                <ButtonIcon
                  icon={IconSearch}
                  background={stylesGlobal.$goldColor}
                  onPress={() => handleOpenModal()}
                />
              </View>
            </View>
          </Footer>
        </Container>
      )}
    </Container>
  );
};

export default Home;
