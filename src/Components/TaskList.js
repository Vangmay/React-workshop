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
              {/* <tr key={i}>
                <td>{i + 1}</td>
                <td>{task}</td>
                <input type="checkbox" />
                <button onClick={() => onDeleteTask(i)}>Delete</button>
                <input
                  type="text"
                  value={updateTask}
                  onChange={(e) => setUpdateTask(e.target.value)}
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    onEditTask(i, updateTask);
                    setUpdateTask("");
                  }}
                >
                  Edit
                </button>
              </tr> */}
            </>
          );
        })}
      </tbody>
    </>
  );
}

export default TaskList;
