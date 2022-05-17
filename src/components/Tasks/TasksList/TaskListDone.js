import React from "react";

import styles from "./TaskList.module.css";
import { motion } from "framer-motion";

import TaskListElement from "../TaskListElement/TaskListElement";

const TaskListDone = props => {

    return (
        <ul className={`${styles.task_list}`}>
        {props.items.map((task, i) => {
            if (task.done === true) {
            return (
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
            >
                {task.title}
            </TaskListElement>
            </motion.div>)
            }
        })}
    </ul>
    );
}

export default TaskListDone