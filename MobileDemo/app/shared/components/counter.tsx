// This will be a shared folder
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

const centered: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
};

const SIZE = 100;
const FONT_SIZE = SIZE / 2;

const styles = StyleSheet.create({
  container: {
    ...centered,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ee7767",
  },
  counter: {
    ...centered,
    height: SIZE,
    width: SIZE,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Pressable onPress={decrement}>
        <Text>-</Text>
      </Pressable>
      <View>
        <Text>{count}</Text>
      </View>
      <Pressable onPress={increment}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default Counter;
