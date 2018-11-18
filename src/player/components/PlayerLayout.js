import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

function PlayerLayout({ video, loader, loading, controls }) {
  return (
    <View style={styles.container}>
      <View style={[styles.completeAbsolute, styles.video]}>{video}</View>
      <View style={[styles.completeAbsolute, styles.overlay]}>
        {loading && loader}
      </View>
      {controls}
    </View>
  );
}

const styles = StyleSheet.create({
  completeAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  container: {
    paddingTop: "56.25%"
  },
  video: {},
  overlay: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PlayerLayout;
