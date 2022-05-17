import React from "react";

import styles from "./TaskAction.module.css";
import NewTaskStyles from "./NewTask.module.css";


const NewTask = props => {

    return (
		<button className={`${styles.tasks_action} ${NewTaskStyles.add_task}`} onClick={props.showNewTask}>
			<h1>Add Task</h1>
		</button>
	);
}

export default NewTask;