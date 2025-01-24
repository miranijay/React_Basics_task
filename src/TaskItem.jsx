// Represents individual task items
import React, { useContext } from "react";
import { TaskContext } from "./TaskContext.jsx";

export default function TaskItem({task}) {                      // Task 5,6 - Components,props

    const {deletetask} = useContext(TaskContext)            // Accesses delete Task

    return(                                                                // Task 4 - Fragments
        <>                                      
            <li style={{                                        // Task 3 - React Element Styles
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: '1px solid black',
                padding: '10px',
                marginBottom: '5px',
                borderRadius: '5px',
            }} className="task-item" >
                <div>
                    <strong>{task.title}</strong>
                    <p>{task.description}</p>
                </div>
                <div>
                    <button onClick={() => deletetask(task.id)} className="delete-button">Delete</button>
                </div>        
            </li>
        </>
    )
}