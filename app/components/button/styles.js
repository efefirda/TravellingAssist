import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  text: {
    color: 'red',
  },
});

export default styles;
