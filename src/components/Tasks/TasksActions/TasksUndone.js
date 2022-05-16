import React from "react";

import styles from "./TaskAction.module.css";

const TaskUndone = (props) => {
	return (
		<div className={`${styles.tasks_action}`}>
			<h1>Undone Tasks</h1>
		</div>
	);
};

export default TaskUndone;
