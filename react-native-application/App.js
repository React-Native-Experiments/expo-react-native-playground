import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <View style={styles.container}>
      {toggle && (
          <Text>Toggle Me</Text>
      )}
      <Button title="Button" onPress={() => setToggle(!toggle)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
