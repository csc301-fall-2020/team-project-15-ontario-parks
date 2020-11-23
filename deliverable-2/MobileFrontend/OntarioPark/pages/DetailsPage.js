import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

/* A detail page that provides more information about the infrastructure. */

const DetailsPage = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        {/* dsplays the name of the infrastructure */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{route.params.title}</Text>
        </View>
        {/* dsplays an image of the infrastructure */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: route.params.imageSource,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        {/* dsplays a description of the infrastructure */}
        <View style={styles.descriptionContainer}>
          <Text>{route.params.detail}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 20,
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "black",
    fontSize: 26,
  },
  imageContainer: {
    width: 300,
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  descriptionContainer: {
    width: 300,
    alignItems: "center",
  },
});

export default DetailsPage;
