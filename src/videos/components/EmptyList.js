import React from "react";
import { View, Text, StyleSheet } from "react-native";

function EmptyList({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 16
  }
});

export default EmptyList;
