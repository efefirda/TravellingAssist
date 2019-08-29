import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    '@media ios': {
      shadowColor: '#ccc',
    },
    '@media android': {
      shadowColor: 'black',
    },
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
    zIndex: 0,
    shadowRadius: 2,
    shadowOpacity: 1.0,
    borderRadius: 10,
  },
  cardContainerFlat: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    zIndex: 0,
    borderRadius: 10,
    padding: 15,
  },

  cardDate: {
    width: 70,
    height: 70,
    backgroundColor: '$background',
    borderRadius: 10,
    shadowColor: '#ccc',
    shadowRadius: 2,
    '@media ios': {
      shadowColor: '#ccc',
    },
    '@media android': {
      shadowColor: 'black',
    },
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
    zIndex: 1,
    shadowOpacity: 1.0,
  },
  topCardDate: {
    width: '100%',
    height: 20,
    backgroundColor: '#ff3d3d',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomCardDate: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCardDate: {
    height: 80,
  },
  marginBottom5: { marginBottom: 5 },
  marginBottom10: { marginBottom: 10 },
  height30: {
    height: 30,
  },
  paddingLeft5: {
    paddingLeft: 5,
  },
  containerImage: {
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '$lightgrey2',
  },
  containerText: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '$blacklight',
    opacity: 0.5,
    borderRadius: 10,
  },
  padding2: {
    padding: 2,
  },
  childrenImage: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
  },
  containerImage150: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default styles;
