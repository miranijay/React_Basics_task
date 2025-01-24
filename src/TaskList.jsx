// Displays list of tasks dynamically

import React, { useContext } from "react";
import { TaskContext } from "./TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";

export default function TaskList() {                        // Task 5 - Components

    const {tasks} = useContext(TaskContext)     // Accesses tasks 
    if(tasks.length === 0) {                // Task 8 - Conditionals
        return <p className="no-tasks">No Tasks are available!!....</p>
    }

    return (
        <>
            <ul className="task-list">
                {
                    tasks.map((task) => (                       // Task 9 - Lists     // Iterates over the tasks array to render TaskItem components.
                        <TaskItem key={task.id}  task={task} />
                    ))
                }
            </ul>

        </>
    )
}
