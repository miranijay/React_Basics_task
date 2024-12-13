// Manages the global states for tasks

import React, { createContext, useState } from "react";


export const TaskContext = createContext()       //Task 10 - Context    //Exports a context object to share state across the app.

export default function TaskProvider({children}) {                  // Task 7 - Children Props

    const [tasks, settasks] = useState("")

    const addtask = (task) => {
        settasks([...tasks,task])                   //spread operator
        window.alert("Task Successfully added")
    }

    const deletetask = (id) => {
        settasks(tasks.filter(task => task.id !== id))          // Remove task by filtering out the task with id 
        window.alert("Task Successfully deleted")
    }


    return(                                                                     // Passes to child component 
        <TaskContext.Provider value = {{tasks, addtask, deletetask}}>           
            {children}                  
        </TaskContext.Provider>
        
    )

}

