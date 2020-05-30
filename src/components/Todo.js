import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, removeTodo, setTodoId }) => {
  const onPressHandler = () => {
    setTodoId(todo.id);
  };

  const onLongPressHandler = () => {
    removeTodo(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPressHandler}
      onLongPress={onLongPressHandler}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
