import React from "react";

import styles from "./TaskAction.module.css";

const TaskUndone = (props) => {
	return (
		<button className={`${styles.tasks_action}`} onClick={props.showUnDoneTasks}>
			<h1>Undone Tasks</h1>
		</button>
	);
};

export default TaskUndone;
