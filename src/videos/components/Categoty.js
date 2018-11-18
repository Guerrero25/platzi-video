import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

function Category({ genres, background_image }) {
  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: background_image }}
    >
      <Text style={styles.genre}>{genres[0]}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 250
  },
  genre: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0, .75)",
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0
  }
});

export default Category;
