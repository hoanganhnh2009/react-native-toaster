import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Animated,
  TouchableWithoutFeedback,
  View,
  Text,
  StatusBar,
  Image
} from "react-native";
import ToastStyles from "./ToastStyles";
const noop = () => 0;

class Toast extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    styles: PropTypes.object,
    duration: PropTypes.number,
    height: PropTypes.number,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onPress: PropTypes.func
  };

  static defaultProps = {
    styles: ToastStyles.info,
    duration: 3000,
    height: 100,
    onShow: noop,
    onHide: noop,
    onPress: noop
  };

  state = { animatedValue: new Animated.Value(0), timeoutId: null };

  componentWillMount() {
    this.showToast();
  }

  componentWillUnmount() {
    const { timeoutId } = this.state;
    clearTimeout(timeoutId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.showToast();
    }
  }

  showToast() {
    const animatedValue = new Animated.Value(0);
    StatusBar.setHidden(true);
    this.setState({ animatedValue });

    Animated.timing(animatedValue, { toValue: 1, duration: 350 }).start();

    const { duration, onShow } = this.props;
    const timeoutId = setTimeout(() => this.hideToast(), duration + 350);

    this.setState({ timeoutId }, onShow);
  }

  hideToast() {
    const { timeoutId, animatedValue } = this.state;

    clearTimeout(timeoutId);

    Animated.timing(animatedValue, { toValue: 0, duration: 350 }).start();

    setTimeout(() => {
      StatusBar.setHidden(false);
      this.props.onHide();
    }, 350);
  }

  onPress = () => {
    this.hideToast();
    this.props.onPress();
  };
  getIcons = type => {
    switch (type) {
      case "error":
        return (
          <Image
            style={{ width: 30, height: 30, marginRight: 5 }}
            source={require("./images/error.png")}
          />
        );
      case "success":
        return (
          <Image
            style={{ width: 30, height: 30, marginRight: 5 }}
            source={require("./images/success.png")}
          />
        );

      default:
        break;
    }
  };
  render() {
    const y = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-this.props.height, 0]
    });

    const { styles,type } = this.props;
    let text = this.props.text;
// alert(JSON.stringify(styles))
    if (Object.prototype.toString.call(text) === "[object String]") {
      text = (
        <View style={[styles.container, { flexDirection: "row" }]}>
          {this.getIcons(type)}
          <Text style={[styles.text, { fontSize: 15 }]}>{text}</Text>
        </View>
      );
    }

    return (
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 9999,
          transform: [{ translateY: y }]
        }}
      >
        <TouchableWithoutFeedback onPress={this.onPress}>
          {text}
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

export default Toast;
