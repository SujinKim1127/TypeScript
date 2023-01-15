import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task bg-style-50">
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button className="bg-sky-400 shadow rounded aspect-square" onClick={() => {
            completeTask(task.taskName);
        }} >X</button>
    </div>
  );
};

export default TodoTask;
