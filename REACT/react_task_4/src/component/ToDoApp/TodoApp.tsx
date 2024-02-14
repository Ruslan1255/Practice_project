import React from "react";
import style from "./todoApp.module.css";
import { MdRadioButtonUnchecked } from "react-icons/md";

const ToDoApp = ({ task, toggleComplete, deleteToDo }) => {
  return (
    <div className={style.ToDo}>
      <div
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? style.completed : style.toDOTask}`}
      >
        <MdRadioButtonUnchecked
          className={style.ToDo_task_icon}
          onClick={() => deleteToDo(task.id)}
        />
        {task.task}
      </div>
    </div>
  );
};

export default ToDoApp;
