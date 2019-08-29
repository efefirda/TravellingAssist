import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  containerDetail: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '$background',
    paddingTop: 20,
  },
  containerImage50: {
    width: '80%',
    height: 80,
    backgroundColor: '$lightgrey2',
    borderRadius: 20,
  },
  leftStart: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerIconOverlap: {
    position: 'absolute',
    top: -20,
    right: 0,
  },
  containerSlider: {
    width: 150,
    paddingRight: 5,
    height: 150,
  },
  containerSlider100: {
    width: screenWidth,
    height: 250,
  },
  waringArrival: {
    backgroundColor: '$gold',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  line: {
    position: 'absolute',
    height: '100%',
    borderLeftWidth: 1,
    borderColor: '#777',
    width: 10,
    left: 19,
  },
  map: { width: '100%', height: 200, marginBottom: 20 },
});

export default styles;
