import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  seperator: {
    backgroundColor: '$blacklight',
    width: '100%',
    height: 1,
  },
  seperatorDashes: {
    backgroundColor: '$background',
    width: 10,
    height: 1,
    marginHorizontal: 2,
    marginVertical: 10,
  },
});

export default styles;
