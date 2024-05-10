import React from "react";
import { useState } from "react";

function TaskList({ tasks, onTaskToggle, onEditTask, onDeleteTask }) {
  const [updateTask, setUpdateTask] = useState();

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
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{task.task}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onClick={() => onTaskToggle(i)}
                  />
                  <button onClick={() => onDeleteTask(i)}>Delete</button>
                  <form>
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
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TaskList;
