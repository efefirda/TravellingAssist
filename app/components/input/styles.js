import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "$grey",
    justifyContent: "center",
    borderRadius: 5,
    width: "100%",
    height: "100%",
    paddingHorizontal: 10
  },
  $disabelColor: "$disabel",
  text: {
    paddingBottom: 5,
    paddingTop: 15
  },
  textForgot: {
    color: "$gold"
  },
  ErrorMessage: {
    color: "red",
    fontSize: 10,
    textAlign: "right",
    alignItems: "flex-end"
  },
  icon: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingRight: 10
  },
  iconEye: {
    position: "absolute",
    top: 12,
    right: 0,
    paddingRight: 10
  },
  iconCalendar: {
    position: "absolute",
    top: 7,
    right: 0,
    paddingRight: 10
  },
  containerIconEye: {
    width: 30,
    height: 20
  }
});

export default styles;
