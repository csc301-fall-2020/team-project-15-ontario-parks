import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const DetailsPage = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Title Text</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                "https://images.thestar.com/94hUqxqULxO_6DkLuGlGtybCMeo=/1086x724/smart/filters:cb(1589149873510)/https://www.thestar.com/content/dam/thestar/news/canada/2020/05/09/more-than-500-ontario-parks-and-conservation-areas-will-reopen-monday/tab_na_enviro3_002.jpg",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
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
