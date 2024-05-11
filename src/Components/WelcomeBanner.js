import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function getStoredName() {
  return window.localStorage.getItem("name") ?? "";
}

function setStoredName(newName) {
  window.localStorage.setItem("name", newName);
}

function WelcomeBanner({ numTasks }) {
  const [name, setName] = useState(getStoredName());
  const hasName = name.length > 0;
  function handleNameChangeEvent(e) {
    e.preventDefault();
    const newName = prompt("Change name");

    if (newName.length == 0) {
      setName("");
    } else {
      setName(newName);
      setStoredName(newName);
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Orbital todos
            </Typography>
            <Button
              size="large"
              onClick={handleNameChangeEvent}
              variant="contained"
            >
              {hasName ? "Change name" : "set name"}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <center>
        {hasName ? (
          <>
            <h2>Welcome back! {name}</h2>
          </>
        ) : (
          <h2>Hi there, how may I address you?</h2>
        )}
        {numTasks > 0 ? (
          <p>
            You have <strong>{numTasks}</strong>{" "}
            {numTasks == 1 ? "task" : "tasks"} today!
          </p>
        ) : (
          <p>You are all done</p>
        )}
      </center>
    </>
  );
}

export default WelcomeBanner;
