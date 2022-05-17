import React, { useState } from "react";
import TaskInput from "../Tasks/NewTaskInput/TaskInput";
import NewTask from "../Tasks/TasksActions/NewTask";
import TaskDone from "../Tasks/TasksActions/TasksDone";
import TaskUndone from "../Tasks/TasksActions/TasksUndone";
import TaskList from "../Tasks/TasksList/TaskList";
import TaskListDone from "../Tasks/TasksList/TaskListDone";
import TaskListUnDone from "../Tasks/TasksList/TaskListUndone";
import "./Card.css";

const Card = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const [isDoneTaskListShowing, setIsDoneTaskListShowing] = useState(false)
	const [isNewTaskShowing, setIsNewTaskShowing] = useState(true)
	const [isUnDoneTaskListShowing, setIsUnDoneTaskListShowing] = useState(false)

	const openFormHandler = () => {
		setIsEditing(true);
	};

	const closeFormHandler = () => {
		setIsEditing(false)
	}
	const [tasksList, setTaskList] = useState([
		{
			title: "Feed the Dog",
			done: false,
			id: Math.random().toString(),
		},
		{
			title: "Feed the Fish",
			done: false,
			id: Math.random().toString(),
		},
		{
			title: "Wash car",
			done: false,
			id: Math.random().toString(),
		},
		{
			title: "Play games",
			done: false,
			id: Math.random().toString(),
		},
	]);


	const deleteTaskHandler = (taskId) => {
		setTaskList((prevTasks) => {
			console.log(prevTasks)
			console.log(taskId);
			const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
			console.log(updatedTasks);
			return updatedTasks;
		});
	};

	const saveTaskData = (enteredTaskData) => {
		setTaskList((prevTasks) => {
			return [enteredTaskData, ...prevTasks];
		});
	};

	const taskDoneHandler = taskId => {
		setTaskList(tasksList.map(item => {
			if (item.id === taskId) {
				return {
					...item, done: !item.done
				}
			}
			return item;
		}))

		console.log(tasksList)
	}

	const openDoneTaskList = () => {
		setIsUnDoneTaskListShowing(false)
		setIsNewTaskShowing(false)
		setIsDoneTaskListShowing(true)
	}

	const openShowNewTask = () => {
		setIsUnDoneTaskListShowing(false)
		setIsDoneTaskListShowing(false)
		setIsNewTaskShowing(true)
	}

	const openShowUnDoneTasks = () => {
		setIsDoneTaskListShowing(false)
		setIsNewTaskShowing(false)
		setIsUnDoneTaskListShowing(true)
	}


	return (
		<div className="card">
			<div className="actions">
				<TaskDone showDoneTasks={openDoneTaskList}/>
				<NewTask showNewTask={openShowNewTask}/>
				<TaskUndone showUnDoneTasks={openShowUnDoneTasks}/>
			</div>
			{isNewTaskShowing && <div className="form_input">
				{isEditing && <TaskInput onSaveTask={saveTaskData}  onCloseFormHandler={closeFormHandler} />}
				{!isEditing && (
					<button className={"add_task_button"} onClick={openFormHandler}>
						Add task
					</button>
				)}
			</div>}
			{isNewTaskShowing && <TaskList items={tasksList} onDeleteTask={deleteTaskHandler} onDoneTask={taskDoneHandler}/>}
			{isDoneTaskListShowing && <TaskListDone items={tasksList} onDeleteTask={deleteTaskHandler}/>}
			{isUnDoneTaskListShowing && <TaskListUnDone items={tasksList} onDeleteTask={deleteTaskHandler} onDoneTask={taskDoneHandler} /> }
		</div>
	);
};

export default Card;
