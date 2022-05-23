import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Work Out',
        day:'May 21st at 12pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Eat Lunch',
        day:'May 21st at 2pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Pick up Kids',
        day:'May 21st at 4pm',
        reminder: true,
    }
  ])

  // Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
        <Header
        />
        <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      ) : ( 
        'No Tasks to Show' 
      )}
    </div>
  )
}

export default App;
