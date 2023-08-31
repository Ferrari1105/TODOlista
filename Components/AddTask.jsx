import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
const [taskText, setTaskText] = useState('');

const handleAddTask = () => {
    if (taskText.trim() === '') {
    return;
    }
    onAddTask(taskText);
    setTaskText('');
};

return (
    <View style={styles.addTaskContainer}>
    <TextInput
        style={styles.input}
        placeholder="Add a new task"
        onChangeText={text => setTaskText(text)}
        value={taskText}
    />
    <Button title="Add" onPress={handleAddTask} />
    </View>
);
};

const styles = StyleSheet.create({
addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
},
input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
},
});

export default AddTask;