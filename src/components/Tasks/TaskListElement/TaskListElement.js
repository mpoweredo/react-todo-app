import React from "react";

import styles from "./TaskListElement.module.css";

import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";

const TaskListElement = (props) => {
	const deleteTaskHandler = () => {
		props.onDelete(props.id);
	};

	const taskDoneHandler = () => {
		props.onDone(props.id)
	}
	


	return (
		<li className={`${styles.list_element}`}>
			<h3 className={`${styles.list_title}`}>{props.title}</h3>
			<div className={`${styles.list_buttons}`}>
				{props.onDone && <button className={`${styles.list_done_button}`} onClick={taskDoneHandler} >
					<DoneIcon fontSize="medium" />
				</button>}
				<button
					className={`${styles.list_delete_button}`}
					onClick={deleteTaskHandler}
				>
					<ClearIcon fontSize="medium" />
				</button>
			</div>
		</li>
	);
};

export default TaskListElement;
