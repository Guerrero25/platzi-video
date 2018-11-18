import React from "react";
import { View, Text, StyleSheet } from "react-native";

function VerticalSeparator({ color }) {
  return <View style={[styles.container, { borderTopColor: color }]} />;
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1
  }
});

VerticalSeparator.defaultProps = {
  color: "#eaeaea"
};

export default VerticalSeparator;
