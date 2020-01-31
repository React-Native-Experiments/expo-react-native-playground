import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalForm from "./components/GoalForm";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

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
  };

  return (
    <View style={styles.layout}>
      <GoalForm
        text={text}
        handleButtonPress={handleButtonPress}
        handleInputChange={handleInputChange}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={({ item }) => {
          return <GoalItem item={item} />;
        }}
        colors={"#000"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 50
  }
});
