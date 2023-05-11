import { useRef } from "react";
import { useDispatch } from "react-redux"
import { addTodo,deleteTodo } from "../reducers/todoSlice"

export const Task = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const addNewTask = () => {
        console.log("plus", inputRef.current.ref)
        const task = inputRef.current.value.trim();

        if (task !== "") {
            dispatch(addTodo(task))
            inputRef.current.ref = ""
        }
    }

    return (
        <div className="task-component">
            <div className="add-task">
                <input
                    type="text"
                    placeholder="Add task here..."
                    ref={inputRef}
                    className="taskInput"

                />
                <button onClick={addNewTask}>Add Task</button>

            </div>

        </div>
    )



}