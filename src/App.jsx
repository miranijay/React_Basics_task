import React from "react"
import TaskProvider from "./TaskContext.jsx"
import TaskForm from "./TaskForm.jsx"
import TaskList from './TaskList.jsx'
import './styles.css';


export default function App() {
  

  return (                                    // Task 1 - React Elements
      <TaskProvider>
          <div className="task-manager">
            <h1 className="heading">Task Manager</h1>     
          </div>
          <TaskForm />
          <TaskList />

      </TaskProvider>
    
  )
}

