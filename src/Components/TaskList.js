import React from "react";
import { useState } from "react";
import Task from "./Task";
import { List, Table, TableCell, TableHead, TableRow } from "@mui/material";
function TaskList({ tasks, setTasks }) {
  return (
    <center>
      <h2>Task list</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        {tasks.map((task, i) => {
          return <Task task={task} i={i} tasks={tasks} setTasks={setTasks} />;
        })}
      </Table>
    </center>
  );
}

export default TaskList;
