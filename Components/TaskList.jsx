import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
return (
    <ScrollView style={styles.taskList}>
    {tasks.map((task, index) => (
        <Task
        key={index}
        title={task.title}
        completed={task.completed}
        onCompleteTask={completed => onCompleteTask(index, completed)}
        onDeleteTask={() => onDeleteTask(index)}
        style={index > 0 && tasks[index - 1].completed && styles.completedTaskSpace}
        />
    ))}
    </ScrollView>
);
};

const styles = StyleSheet.create({
taskList: {
    padding: 20,
},
// completedTaskSpace: {
//     marginTop: 10, // Crea espeacio en las tasks completadas
// },
});

export default TaskList;