import React from "react";

import styles from './TaskAction.module.css'

const TaskDone = props => {

    return (
        <div className={`${styles.tasks_action}`}>
            <h1>Done Tasks</h1>
        </div>
    );
}

export default TaskDone;