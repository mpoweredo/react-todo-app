import React from "react";

import styles from './TaskAction.module.css'

const TaskDone = props => {

    return (
        <button className={`${styles.tasks_action}`} onClick={props.showDoneTasks}>
            <h1>Done Tasks</h1>
        </button>
    );
}

export default TaskDone;