import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

function ListLayout({ title, children, background }) {
  return (
    <ImageBackground
      style={[
        styles.container,
        {
          flex: background ? 0 : 1,
          paddingHorizontal: background ? 10 : 0,
          paddingVertical: background ? 30 : 10
        }
      ]}
      source={background}
    >
      <Text style={[styles.title, { marginLeft: background ? 0 : 8 }]}>
        {title}
      </Text>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  title: {
    color: "#4c4c4c",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default ListLayout;
