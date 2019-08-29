import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  footer: {
    height: 70,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 8,
    shadowColor: "$greylight",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "$background",
    shadowOpacity: 1.0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
