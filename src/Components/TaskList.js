import React from "react";

function TaskList({ tasks }) {
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
        {tasks.map((task) => {
          return (
            <>
              <tr>
                <td>{task}</td>
                <input type="checkbox" />
              </tr>
            </>
          );
        })}
      </tbody>
    </>
  );
}

export default TaskList;
