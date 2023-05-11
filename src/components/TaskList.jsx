import React, { useDebugValue } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addTodo,deleteTodo } from "../reducers/todoSlice"


export const TaskList = () => {
    const tasks = useSelector(state => {
        console.log("HELLO",state) 
        return state.todo.tasks
    })
    
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    useDebugValue(tasks)

    return (
        <div className="tasklist">
            <div className="display-tasks">
                <h3>Your tasks:</h3>
                <ul className="tasks">
                    {
                        tasks.map((task) => (
                            <li className="task" key={task.id}>
                                {task.text}
                                <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                                    delete
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
} 