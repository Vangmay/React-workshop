import React, { useState } from "react";

function TaskList({ tasks, onEditTask, onDeleteTask }) {
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
              <tr key={i}>
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
              </tr>
            </>
          );
        })}
      </tbody>
    </>
  );
}

export default TaskList;
