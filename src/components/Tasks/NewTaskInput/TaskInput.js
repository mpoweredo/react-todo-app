import React from "react";

import styles from './TaskInput.module.css'

const TaskInput = props => {

    return (
        <form className={`${styles.task_form}`}>
            <label>Task Title</label>
            <input type="text" />
            <button type="submit" className={`${styles.task_button}`}>Add Task</button>
        </form>
    );
}

export default TaskInput;