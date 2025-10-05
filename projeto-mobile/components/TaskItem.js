// components/TaskItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

const COLORS = {
    GRAY_500: '#333333',
    GRAY_100: '#F2F2F2',
    PURPLE: '#8284FA',
    BLUE: '#4EA8DE',
    DANGER: '#E25858',
    GREEN_CHECK: '#5CB85C',
    CHECK_BORDER: '#5E60CE',
    GRAY_300: '#808080',
};

const TaskItem = ({ task, onToggleDone, onDeleteTask }) => {
    return (
        <View style={styles.listItem}>

            <TouchableOpacity
                onPress={() => onToggleDone(task.id)}
                style={styles.checkButton}
            >
                {task.isDone ? (
                    // CORREÇÃO: Trocamos AntDesign por um ícone Feather
                    <Feather name="check-square" size={24} color={COLORS.GREEN_CHECK} />
                ) : (
                    // Círculo vazio para pendente
                    <View style={styles.uncheckCircle} />
                )}
            </TouchableOpacity>

            <Text style={[styles.taskText, task.isDone && styles.taskDone]}>
                {task.text}
            </Text>

            <TouchableOpacity
                onPress={() => onDeleteTask(task.id)}
                style={styles.deleteButton}
            >
                <Feather name="trash-2" size={20} color={COLORS.GRAY_300} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 12,
        marginVertical: 4,
        backgroundColor: COLORS.GRAY_500,
        borderColor: COLORS.GRAY_500,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 64,
    },
    checkButton: {
        marginRight: 8,
    },
    uncheckCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLORS.BLUE,
    },
    taskText: {
        flex: 1,
        fontSize: 14,
        color: COLORS.GRAY_100,
        marginHorizontal: 8,
    },
    taskDone: {
        color: COLORS.GRAY_300,
    },
    deleteButton: {
        padding: 8,
    }
});

export default TaskItem;