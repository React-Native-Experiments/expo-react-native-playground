import React from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const GoalForm = ({
  text,
  handleInputChange,
  handleButtonPress,
  visible,
  handleCancel
}) => {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          value={text}
          onChangeText={handleInputChange}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={handleButtonPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 20
  },
  input: {
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
    width: "80%",
    borderBottomColor: "black",
    marginBottom: 10
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  button: {
    width: "50%"
  }
});

export default GoalForm;
