// App.js
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native'
import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput'
import { AntDesign } from 'react-native-vector-icons'

const COLORS = {
  GRAY_700: '#1A1A1A',
  GRAY_600: '#262626',
  GRAY_100: '#F2F2F2',
  BLUE: '#262a2cff',
  PURPLE: '#ff0000ff',
  GRAY_400: '#808080',
  BLACK: '#0D0D0D',
}

export default function App() {
  const [tasks, setTasks] = useState([])

  const completedTasksCount = tasks.filter(task => task.isDone).length

  const addTaskHandler = (taskText) => {
    if (taskText.trim().length === 0) return

    setTasks(currentTasks => [
      ...currentTasks,
      {
        id: Math.random().toString(),
        text: taskText,
        isDone: false
      },
    ])
  }

  const toggleDoneHandler = (taskId) => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    )
  }

  const deleteTaskHandler = (taskId) => {
    setTasks(currentTasks =>
      currentTasks.filter(task => task.id !== taskId)
    )
  }

  return (
    <SafeAreaView style={styles.screen}>

      <View style={styles.header}>
        <Text style={styles.logoText}>
          <Text style={styles.logoTo}>to</Text>
          <Text style={styles.logoDo}>do</Text>
        </Text>
      </View>

      <TaskInput
        onAddTask={addTaskHandler}
        style={styles.taskInputPosition}
      />

      <View style={styles.contentContainer}>

        <View style={styles.infoContainer}>
          <View style={styles.statusBox}>
            <Text style={styles.createdText}>Criadas</Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.statusBox}>
            <Text style={styles.doneText}>Concluídas</Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{completedTasksCount}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggleDone={toggleDoneHandler}
              onDeleteTask={deleteTaskHandler}
            />
          )}
          style={styles.list}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <AntDesign name="profile" size={60} color={COLORS.GRAY_400} style={styles.emptyIcon} />
              <Text style={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.emptySubtitle}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.GRAY_700,
  },
  header: {
    height: 173,
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: -1,
    paddingTop: 20,
  },
  logoTo: {
    color: COLORS.BLUE,
  },
  logoDo: {
    color: COLORS.PURPLE,
  },

  taskInputPosition: {
    marginTop: -30,
    marginBottom: 32,
    paddingHorizontal: 24,
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdText: {
    color: COLORS.PURPLE,
    fontWeight: 'bold',
    fontSize: 14,
  },
  doneText: {
    color: COLORS.PURPLE,
    fontWeight: 'bold',
    fontSize: 14,
  },
  counter: {
    backgroundColor: COLORS.GRAY_600,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    marginLeft: 8,
  },
  counterText: {
    color: COLORS.GRAY_100,
    fontWeight: 'bold',
    fontSize: 12,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.GRAY_400,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  emptyIcon: {
    marginBottom: 16,
    opacity: 0.3,
  },
  emptyTitle: {
    color: COLORS.GRAY_400,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  emptySubtitle: {
    color: COLORS.GRAY_400,
    fontSize: 14,
  },
})