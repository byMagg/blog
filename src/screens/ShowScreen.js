import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShowScreen = ({ navigation }) => {
  navigation.getParam("id");
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
