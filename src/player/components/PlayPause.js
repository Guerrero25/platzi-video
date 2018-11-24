import React from "react";
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function PlayPause({ onPress, paused }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor="transparent"
    >
      {paused ? (
        <Icon name="play" color="#70b124" size={25} />
      ) : (
        <Icon name="pause" color="#70b124" size={25} />
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 10,
    marginVertical: 5
  },
  icon: {
    color: "#70b124"
  }
});

export default PlayPause;
