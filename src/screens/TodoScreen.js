import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { THEME } from "../theme";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/EditModal";

const TodoScreen = ({ todo, goBack, removeTodo, updateTodoTitle }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const minTitleLenght = 3;
  const onSave = (title) => {
    const titleLength = title.trim().length;

    if (titleLength < minTitleLenght) {
      Alert.alert(
        "Error",
        `Title length should be greater than ${minTitleLenght} characters. Now it's only ${titleLength}.`
      );
      return;
    }

    updateTodoTitle({ id: todo.id, title });
    setModalVisible(false);
  };

  return (
    <View>
      <EditModal
        visible={modalVisible}
        value={todo.title}
        onSave={onSave}
        onCancel={() => setModalVisible(false)}
      />

      <AppCard style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{todo.title}</Text>
          <Button
            style={styles.editButton}
            title="Edit"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="Back"
            color={THEME.COLORS.INFO_COLOR}
            onPress={goBack}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Remove"
            color={THEME.COLORS.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  editButton: {
    width: 100,
  },
});

export default TodoScreen;
