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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
