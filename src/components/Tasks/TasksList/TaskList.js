import React from "react";
import TaskListElement from "../TaskListElement/TaskListElement";

import styles from "./TaskList.module.css";
import { motion } from "framer-motion";

const TaskList = (props) => {
	if (props.items.length === 0) {
		return <h1 className={`${styles.task_list_empty}`}>No tasks found.</h1>;
	}

	return (
		<ul className={`${styles.task_list}`}>
			{props.items.map((task, i) => (
				<motion.div
				key={task.id}
				initial={{ opacity: 0, translateY: 50 }}
				animate={{ opacity: 1, translateY: 0}}
				transition={{ duration: 0.55, delay: i * 0.12}}
				>
					<TaskListElement
						// task={task}
						key={task.id}
						id={task.id}
						title={task.title}
						done={task.done}
						onDelete={props.onDeleteTask}
						onDone={task.done === false && props.onDoneTask}
					>
						{task.title}
					</TaskListElement>
				</motion.div>
			))}
		</ul>
	);
};

export default TaskList;
