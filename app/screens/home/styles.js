import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerImage300: {
    width: 300,
    height: 300,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '$lightgrey1',
  },
  innerContainer: {
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '80%',
    paddingTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
    marginTop: 10,
  },
});

export default styles;
