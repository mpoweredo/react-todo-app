import React from "react";
import TaskListElement from "../TaskListElement/TaskListElement";

import styles from "./TaskList.module.css";

const TaskList = (props) => {
	return (
		<ul className={`${styles.task_list}`}>
			{props.items.map((task) => (
				<TaskListElement
					key={task.id}
					id={task.id}
					title={task.title}
					onDelete={props.onDeleteTask}
				>
					{task.title}
				</TaskListElement>
			))}
		</ul>
	);
};

export default TaskList;
