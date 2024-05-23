import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  const [updateTask, setUpdateTask] = useState("");
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
      </table>
      <tbody>
        {tasks.map((task, i) => {
          return (
            <>
              <Task task={task} i={i} tasks={tasks} setTasks={setTasks} />
            </>
          );
        })}
      </tbody>
    </>
  );
}

export default TaskList;
