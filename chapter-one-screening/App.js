import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  //state to hold task list
  const [tasks, setTasks] = useState([]);

  //adds a new task to the task list
  const addTask = (description) => {
    if (description.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), description, completed: false }]);
    }
  };

  //toggles task completion when clicking on a task
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  //removes tasks from the task list
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;
