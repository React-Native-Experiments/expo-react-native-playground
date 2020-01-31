import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalForm = ({ text, handleInputChange, handleButtonPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Course Goals"
        style={styles.input}
        value={text}
        onChangeText={handleInputChange}
      />
      <Button title="Add" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  input: {
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
    width: "80%",
    borderBottomColor: "black"
  }
});

export default GoalForm;
