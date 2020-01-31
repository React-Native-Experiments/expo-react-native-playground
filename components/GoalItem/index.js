import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GoalItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text>{item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 20
  }
});

export default GoalItem;
