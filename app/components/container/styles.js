import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$background',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  styleSafeAreaWhite: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
