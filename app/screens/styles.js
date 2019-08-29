/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const widthScreen = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  //color
  greyColor: {
    color: '$grey',
  },
  blueColor: {
    color: '$blue',
  },
  whiteColor: {
    color: '$background',
  },
  redColor: {
    color: '$red',
  },
  redTint: {
    tintColor: '$red',
  },
  yellowColor: {
    color: '$yellow',
  },
  $orangeColor: '$yellow',
  $lightRedColor: '$lightRed',
  $redColor: '$red',
  $blackColor: '$blacklight',
  $whiteColor: '$background',
  $goldColor: '$gold',
  $greyColor: '$grey',
  $lightGreyColor: '$lightGrey',
  $greenColor: '$green',
  $blueColor: '$blue',
  $lightyellowColor: '$lightyellow',
  //width
  containerScroll: {
    flex: 1,
    width: '100%',
  },
  widthScreen: {
    width: widthScreen,
  },
  row: {
    flexDirection: 'row',
  },
  flexSize: {
    flex: 1,
  },
  width100: {
    width: '100%',
  },
  width90: {
    width: '90%',
  },
  width80: {
    width: '80%',
  },
  width70: {
    width: '70%',
  },
  width60: {
    width: '60%',
  },
  width65: {
    width: '65%',
  },
  width50: {
    width: '50%',
  },
  width45: {
    width: '45%',
  },
  width40: {
    width: '40%',
  },
  width30: {
    width: '30%',
  },
  width20: {
    width: '20%',
  },
  width10: {
    width: '10%',
  },
  width5: {
    width: '5%',
  },

  //alignment
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightCenter: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightStart: {
    alignItems: 'flex-end',
  },
  leftCenter: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },

  //text
  bold: {
    fontWeight: 'bold',
  },
  text16: {
    fontSize: 16,
  },
  text15: {
    fontSize: 15,
  },
  text18: {
    fontSize: 18,
  },
  text14: {
    fontSize: 14,
  },
  text11: {
    fontSize: 11,
  },
  text20: {
    fontSize: 20,
  },
  text26: {
    fontSize: 26,
  },
  text12: {
    fontSize: 12,
  },
  text10: {
    fontSize: 10,
  },

  //container
  containerIcon20: {
    width: 20,
    height: 20,
  },
  closeModal: {
    position: 'absolute',
    right: 30,
    top: 10,
    width: 20,
    height: 20,
    padding: 5,
  },

  //image
  image: {
    width: '100%',
    height: '100%',
  },

  //padding
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  paddingVertical20: {
    paddingVertical: 20,
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
  padding20: {
    padding: 20,
  },
  padding10: {
    padding: 10,
  },
  padding15: {
    padding: 15,
  },
  padding5: {
    padding: 5,
  },
  paddingTop10: {
    paddingTop: 10,
  },
  paddingTop20: {
    paddingTop: 20,
  },
  paddingLeft10: {
    paddingLeft: 10,
  },
  paddingRight10: {
    paddingRight: 10,
  },
  paddingLeft30: {
    paddingLeft: 30,
  },
  paddingBottom15: {
    paddingBottom: 15,
  },
  paddingBottom10: {
    paddingBottom: 10,
  },
  //margin
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  hidden: {
    overflow: 'hidden',
  },
  marginRight10: {
    marginRight: 10,
  },
});

export default styles;
