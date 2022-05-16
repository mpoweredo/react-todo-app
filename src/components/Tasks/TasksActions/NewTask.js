import React from "react";

import styles from "./TaskAction.module.css";
import NewTaskStyles from "./NewTask.module.css";


const NewTask = props => {

    return (
		<div className={`${styles.tasks_action} ${NewTaskStyles.add_task}`}>
			<h1>Add Task</h1>
		</div>
	);
}

export default NewTask;