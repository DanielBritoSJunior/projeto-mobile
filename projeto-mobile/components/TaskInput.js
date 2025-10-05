// components/TaskInput.js
import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const COLORS = {
    GRAY_600: '#262626',
    GRAY_100: '#F2F2F2',
    GRAY_300: '#808080',
    BLUE_DARK: '#ff0808ff',
}

const TaskInput = ({ onAddTask, style }) => {
    const [taskText, setTaskText] = useState('')

    const handleAddTask = () => {
        if (taskText.trim().length === 0) return

        onAddTask(taskText)
        setTaskText('')
    }

    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.textInput}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={COLORS.GRAY_300}
                value={taskText}
                onChangeText={setTaskText}
                onSubmitEditing={handleAddTask}
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddTask}
                activeOpacity={0.7}
            >
                <Feather name="plus-circle" size={16} color={COLORS.GRAY_100} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        height: 54,
        backgroundColor: COLORS.GRAY_600,
        color: COLORS.GRAY_100,
        borderWidth: 1,
        borderColor: COLORS.GRAY_600,
        borderRadius: 6,
        padding: 16,
        marginRight: 4,
        fontSize: 16,
    },
    addButton: {
        width: 52,
        height: 52,
        backgroundColor: COLORS.BLUE_DARK,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default TaskInput