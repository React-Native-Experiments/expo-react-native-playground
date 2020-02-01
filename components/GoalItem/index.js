import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ item, handleDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => handleDelete(item.id)}>
      <View style={styles.listItem}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
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
