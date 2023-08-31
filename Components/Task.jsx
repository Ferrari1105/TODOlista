import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Task = ({ title, completed, onCompleteTask, onDeleteTask, style }) => {
const taskStyle = completed ? styles.completedTask : styles.task;

return (
    <View style={[taskStyle, style]}>
    <View style={styles.taskContent}>
        <TouchableOpacity onPress={() => onCompleteTask(!completed)}>
        <Text style={completed ? styles.completedText : styles.text}>
            {title}
        </Text>
        </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.deleteButton} onPress={onDeleteTask}>
        <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
task: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Adjusted for the delete button alignment
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
},
completedTask: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Adjusted for the delete button alignment
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
},
taskContent: {
    flex: 1,
},
text: {
    color: '#000000',
},
completedText: {
    color: '#808080',
    textDecorationLine: 'line-through',
},
deleteButton: {
    backgroundColor: '#ff5555',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10, // Add margin to separate from task content
},
deleteButtonText: {
    color: '#ffffff',
},
});

export default Task;