import React from 'react';
import { View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { List, Checkbox } from 'react-native-paper';

//renders each item in the list
const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)}>
        <List.Item
          title={task.description}
          left={() => <Checkbox status={task.completed ? 'checked' : 'unchecked'} />}
          style={task.completed ? styles.completedTask : styles.incompleteTask}
        />
      </TouchableOpacity>
      <Button title="Delete" onPress={() => deleteTask(task.id)} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
  incompleteTask: {
    textDecorationLine: 'none',
  },
});

export default TaskItem;
