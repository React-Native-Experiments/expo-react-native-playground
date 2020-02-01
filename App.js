import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalForm from "./components/GoalForm";

function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = value => {
    setText(value);
  };

  const handleButtonPress = () => {
    setText("");
    setGoals([
      ...goals,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setModalVisible(false);
  };

  const handleDelete = id => {
    const updatedGoals = goals.filter(goal => goal.id !== id);
    setGoals(updatedGoals);
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setText("");
  };

  return (
    <View style={styles.layout}>
      <Button title="Creat a new goal" onPress={handleModalOpen} />
      <GoalForm
        visible={modalVisible}
        text={text}
        handleButtonPress={handleButtonPress}
        handleInputChange={handleInputChange}
        handleCancel={handleCancel}
      />
      <FlatList
        style={styles.list}
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={({ item }) => {
          return <GoalItem item={item} handleDelete={handleDelete} />;
        }}
        colors={"#000"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 50
  },
  list: {
    marginTop: 10
  }
});

export default App;
