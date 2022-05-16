import React, { useState } from "react";
import TaskInput from "../Tasks/NewTaskInput/TaskInput";
import NewTask from "../Tasks/TasksActions/NewTask";
import TaskDone from "../Tasks/TasksActions/TasksDone";
import TaskUndone from "../Tasks/TasksActions/TasksUndone";
import TaskList from "../Tasks/TasksList/TaskList";
import "./Card.css";

const Card = (props) => {

    const [tasksList, setTaskList] = useState([
		{
			title: 'Feed the Dog',
			done: false,
            id: Math.random().toString()
		},
		{
			title: 'Feed the Fish',
			done: false,
            id: Math.random().toString()
		},
		{
			title: 'Wash car',
			done: false,
            id: Math.random().toString()
		},
		{
			title: 'Play games',
			done: false,
            id: Math.random().toString()
		},
	])

    const deleteTaskHandler = taskId => {
        setTaskList(prevTasks => {
            console.log(taskId)
            const updatedTasks = prevTasks.filter(task => task.id !== taskId)
            console.log(updatedTasks)
            return updatedTasks;
        })
    }

	return (
		<div className="card">
			<div className="actions">
				<TaskDone />
				<NewTask />
				<TaskUndone />
			</div>
            <TaskInput />
            <TaskList items={tasksList} onDeleteTask={deleteTaskHandler}/>
		</div>
	);
};

export default Card;
