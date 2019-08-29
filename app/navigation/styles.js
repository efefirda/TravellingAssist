import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $colorHome: '$blacklight',
  $inactiveColor: '$greylight',
  $activeColor: '$gold',
  marginRight10: { marginRight: 10 },
  marginLeft10: { marginLeft: 10 },
  width100: {
    width: '100%',
  },
  //header
  flex1: {
    flex: 1,
  },
  flexDirectionRow: { flexDirection: 'row' },
  image30: {
    height: 30,
    width: 30,
  },
  image20: {
    height: 20,
    width: 20,
  },
  iosBackButton: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  textBackButtonIos: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 18,
  },
  padding: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  containerScroll: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    width: '90%',
  },
  rowFlexEnd: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
    width: '90%',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  row100: {
    flexDirection: 'row',
    width: '100%',
  },
  col: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  col20: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '20%',
  },
  col80: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '80%',
  },
  imagestyle: {
    alignSelf: 'center',
    height: '20%',
    width: '80%',
    justifyContent: 'center',
  },
  spacebottom: {
    paddingBottom: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$lightgrey1',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '80%',
    width: '100%',
    height: '20%',
    backgroundColor: '$whitelight',
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f4f4f4',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    zIndex: 0,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  containerStyle: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    alignItems: 'center',
  },
  col50: {
    width: '60%',
    flex: 1,
  },
  col30: {
    width: '30%',
    flex: 1,
  },
  topNav: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
  },
  topNavText: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    paddingTop: 30,
    paddingBottom: 0,
  },
  cardList: {
    backgroundColor: '#fff',
    width: '90%',
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 10,
    position: 'absolute',
    marginTop: '60%',
    paddingTop: 20,
  },
  imageContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  col40: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '40%',
  },
  col60: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '60%',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },

  textAccountDetail: {
    fontSize: 10,
    color: '$grey',
  },
  textAccountDetailh1: {
    fontSize: 14,
    color: 'black',
  },
  stylepaddingbottom: {
    marginBottom: 10,
  },
  width100height100: { width: '100%', height: '100%' },
});

export default styles;
