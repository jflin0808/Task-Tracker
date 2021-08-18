import React from 'react'
import { useState } from 'react'

import Header from './components/Header' 
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    { 
        id: 1,
        text: 'Learn React Components',
        day: 'Today',
        reminder: true
    },
    { 
        id: 2,
        text: 'Learn Hooks',
        day: 'Today',
        reminder: false
    },
    { 
        id: 3,
        text: 'Learn Styled Components',
        day: 'Today',
        reminder: true
    },
  ])

  // Add Task function
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder function
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder } : task
      )
    )
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      ) : (
        'No Tasks To Do'
      )}
    </div>

  )
}

export default App;
