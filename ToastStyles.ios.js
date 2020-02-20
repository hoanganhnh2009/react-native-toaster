import { StyleSheet } from "react-native";
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
export const base = {
  container: {
    paddingTop: isIphoneX() ? 45 : 25,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#ffffff"
  }
};

export default {
  info: StyleSheet.create({
    container: StyleSheet.flatten([
      base.container,
      { backgroundColor: "#037aff" }
    ]),
    text: base.text
  }),
  success: StyleSheet.create({
    container: StyleSheet.flatten([
      base.container,
      { backgroundColor: "#56c34c" }
    ]),
    text: base.text
  }),
  warning: StyleSheet.create({
    container: StyleSheet.flatten([
      base.container,
      { backgroundColor: "#ec971f" }
    ]),
    text: base.text
  }),
  error: StyleSheet.create({
    container: StyleSheet.flatten([
      base.container,
      { backgroundColor: "#ea3635" }
    ]),
    text: base.text
  })
};
