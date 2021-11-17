import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import AddTask from './components/AddTask';
import Task from './components/Task'

function App() {

  const [tasks, setTasks] = useState([
    
])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer) 
    }

    getTasks()
  },[])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // task.id = Math.floor(Math.random() * 10000) + 1
    // console.log(task)
    // setTasks([...tasks, task])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      <Task tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
