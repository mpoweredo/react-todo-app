import React, { useState } from "react";

import styles from "./TaskInput.module.css";

const TaskInput = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [isValid, setIsValid] = useState(true);
	const [isValidLength, setIsValidLength] = useState(true);

	const titleChangeHandler = (e) => {
		if (e.target.value.trim().length > 0) {
			setIsValid(true);
		}
		if (e.target.value.trim().length > 39) {
			setIsValidLength(false)
		} else {
			setIsValidLength(true)
		}

		setEnteredTitle(e.target.value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		if (enteredTitle.trim().length === 0) {
			setIsValid(false);
			return;
		}

		if (enteredTitle.trim().length > 39) {
			setIsValidLength(false)
			return
		}

		const taskItem = {
			title: enteredTitle,
			done: false,
			id: Math.random().toString(),
		};

		console.log(taskItem);
		props.onSaveTask(taskItem);
		setEnteredTitle("");
	};

	return (
		<div>
			<form className={`${styles.task_form}`} onSubmit={onSubmitHandler}>
				<label>Task Title</label>
				<input
					type="text"
					value={enteredTitle}
					onChange={titleChangeHandler}
					className={`${!isValid && styles.error}`}
				/>
				<p className={`${isValid ? styles.hide_error : styles.show_error}`}>
					Input cannot be empty!
				</p>
				<p className={`${isValidLength ? styles.hide_error : styles.show_error}`}>
					Title is too long!
				</p>
				<button type="submit" className={`${styles.task_button}`}>
					Add Task
				</button>
			<button onClick={props.onCloseFormHandler} className={`${styles.close_form_button}`}>Close</button>
			</form>
		</div>
	);
};

export default TaskInput;
