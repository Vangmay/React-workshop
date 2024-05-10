import React from "react";
import { useState } from "react";
import Task from "./Task";
function TaskList({ tasks, setTasks }) {
  return (
    <>
      <h2>Task list</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Completed?</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => {
            return <Task task={task} i={i} tasks={tasks} setTasks={setTasks} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default TaskList;
