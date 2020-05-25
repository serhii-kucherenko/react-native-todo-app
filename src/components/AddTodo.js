import React, { useState } from "react";
import { View, StyleSheet, Alert, TextInput, Button } from "react-native";
import { THEME } from "../theme";

export const AddTodo = ({ addTodo, todos }) => {
  const [value, setValue] = useState("");
  const todoExists = (title) => todos.some((todo) => title === todo.title);
  const pressHandler = () => {
    if (!value) {
      return Alert.alert(`Title can not be empty`);
    }

    if (todoExists(value)) {
      return Alert.alert(`Todo with this title already added`);
    }

    addTodo(value);
    setValue("");
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => setValue(text.trim())}
        placeholder="Enter todo title"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Add" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  textInput: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.PRIMARY_COLOR,
  },
});
