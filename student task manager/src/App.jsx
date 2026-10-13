import { useState } from 'react';
import TaskForm from "./components/TaskForm"

function App() {
const [Task, setTask] = useState(() => TaskForm)

  return (

  <Task />

  )
}

export default App
