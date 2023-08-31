import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  const loadTasksFromStorage = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasksToStorage = async newTasks => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const handleAddTask = newTask => {
    const updatedTasks = [...tasks, { title: newTask, completed: false }];
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  const handleCompleteTask = (index, completed) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = completed;
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  const handleDeleteTask = index => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <TaskList
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
      <AddTask onAddTask={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;