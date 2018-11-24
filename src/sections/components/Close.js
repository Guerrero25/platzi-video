import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
/* Components */
import Icon from "react-native-vector-icons/FontAwesome";

function Close({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="close" size={20} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14b739",
    borderRadius: 12,
    width: 25,
    height: 25,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Close;
