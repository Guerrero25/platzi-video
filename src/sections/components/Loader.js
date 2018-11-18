import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

function Loader({ text, withIcon }) {
  return (
    <View style={styles.container}>
      {withIcon && <ActivityIndicator style={styles.icon} color="#70b124" />}
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center"
  },
  text: {
    color: "#70b124",
    fontSize: 16,
    textAlign: "center"
  },
  icon: {
    marginRight: 5
  }
});

Loader.defaultProps = {
  text: "Cargando..."
};

export default Loader;
