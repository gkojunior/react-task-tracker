import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

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
        reminder: false,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
  }

  return (
    <div className="container">
      <Header />

      {/* Displays a message if the list is empty */}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : ( 'No Tasks to Show' )}
    </div>
  );
}

export default App;
