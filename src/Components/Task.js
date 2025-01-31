import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Checkbox, ListItem, TextField, Typography } from "@mui/material";
import { TableRow, TableCell } from "@mui/material";

function Task({ task, i, tasks, setTasks }) {
  const taskDesc = task.task;
  const isCompleted = task.completed;
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleTaskDelete(e, i) {
    e.preventDefault();
    setTasks([...tasks.slice(0, i), ...tasks.slice(i + 1)]);
  }

  function handleTaskUpdate(i) {
    setTasks([
      ...tasks.slice(0, i),
      { task: newTask, completed: false },
      ...tasks.slice(i + 1),
    ]);
    setNewTask("");
  }

  return (
    <TableRow divider="bool">
      <TableCell>
        <Typography style={{ color: isTaskCompleted ? "green" : "" }}>
          {taskDesc}
        </Typography>
      </TableCell>

      <TableCell>
        <Checkbox
          type="checkbox"
          checked={isTaskCompleted}
          onClick={(e) => setIsTaskCompleted(!isTaskCompleted)}
        />
      </TableCell>

      <TableCell>
        <Button
          style={{ marginRight: "20px" }}
          variant="contained"
          onClick={(e) => handleTaskDelete(e, i)}
        >
          Delete
        </Button>
      </TableCell>

      <TableCell>
        {isEditing ? (
          <form aria-label="Edit task form">
            <TextField
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <br></br>
            <Button
              variant="contained"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleTaskUpdate(i);
                setNewTask("");
                setIsEditing(false);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={(e) => {
                setIsEditing(false);
              }}
              style={{ background: "red", margin: "5px" }}
            >
              Cancel
            </Button>
          </form>
        ) : (
          <Button variant="contained" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
}

export default Task;
