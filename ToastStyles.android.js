import { StyleSheet } from "react-native";

export const base = {
  container: {
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15
  },
  text: {
    color: "#ffffff"
  }
};

export default {
  info: StyleSheet.create({
    container: StyleSheet.flatten([
      base.container,
      { backgroundColor: "##037aff" }
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
