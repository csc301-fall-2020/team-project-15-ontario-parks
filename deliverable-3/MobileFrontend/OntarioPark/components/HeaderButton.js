

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const HeaderButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: Colors.blue,
    fontFamily: 'open-sans-bold',
    fontSize: 16
  }
});

export default HeaderButton;
