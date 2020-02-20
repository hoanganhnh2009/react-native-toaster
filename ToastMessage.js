import React, { Component } from "react";
import { View, Text } from "react-native";
import ToastStyles from "./ToastStyles";
import Toaster from "./Toaster";

class ToastMessage extends Component {
  state = {
    message: null
  };
  showMessage(text, styles) {
    this.setState({
      message: {
        text,
        styles
      }
    });
  }

  render() {
    return <Toaster message={this.state.message} />;
  }
}

export default ToastMessage;
