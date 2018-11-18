import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
          <View style={styles.right}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 26,
    resizeMode: "contain",
    width: 80
  },
  container: {
    padding: 20,
    flexDirection: "row"
  },
  right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default Header;
