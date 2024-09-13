import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      )}
    />
  );
};

export default TaskList;
