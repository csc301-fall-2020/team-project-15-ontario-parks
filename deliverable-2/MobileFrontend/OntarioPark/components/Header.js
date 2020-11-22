import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 15,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 25,
  },
});

export default Header;
