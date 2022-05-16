import React from "react";

import styles from "./TaskListElement.module.css";

const TaskListElement = (props) => {
    const deleteTaskHandler = () => {
        props.onDelete(props.id)
    }
    
	return (
		<ul className={`${styles.list_element}`}>
			<h3>{props.title}</h3>
			<button className={`${styles.list_delete_button}`} onClick={deleteTaskHandler}>X</button>
		</ul>
	);
};

export default TaskListElement;
