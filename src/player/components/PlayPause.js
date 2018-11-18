import React from "react";
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

function PlayPause({ onPress, paused }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor="#70b124"
    >
      {paused ? (
        <Text style={styles.text}>PLAY</Text>
      ) : (
        <Text style={styles.text}>PAUSE</Text>
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "#70b124"
  },
  text: {
    color: "white"
  }
});

export default PlayPause;
