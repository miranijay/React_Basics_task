// Provides a form to add new tasks
import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext.jsx";

export default function TaskForm() {                        // Task 5 - Components

    const {addtask} = useContext(TaskContext)       // Accesses the addTask 
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault()
        if( !title || !description) {
            window.alert("Fields cannot be empty!")
            return
        } else {
            addtask({ id: Date.now(), title, description, completed: false})
            settitle("")
            setdescription("")
        }
    }

    return (                                        // Task 2 - React Element Attributes
            <form onSubmit={handlesubmit} className="task-form">
                <input type="text"
                        value={title}   
                        onChange={(e) => settitle(e.target.value)}
                        placeholder="Task Title "
                        className="task-input"
                />
                <input type="text"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        placeholder="Task Description"
                        className="task-input"
                />
                <button type="submit" className="task-button" >Add task</button>
            </form>
    )
}