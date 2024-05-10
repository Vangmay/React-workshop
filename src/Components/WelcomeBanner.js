import React from "react";
import { useState } from "react";

function getStoredName() {
  return window.localStorage.getItem("name") ?? "";
}

function setStoredName(newName) {
  window.localStorage.setItem("name", newName);
}

function WelcomeBanner({ numTasks }) {
  const [name, setName] = useState(getStoredName());
  const hasName = name.length > 0;

  function handleNameChange() {
    const newName = prompt("Please enter your name");
    if (newName.length == 0) {
      setName("");
    } else {
      setName(newName);
      setStoredName(newName);
    }
  }

  return (
    <header>
      <h1>Orbital todos</h1>
      <h2>Welcome {name}</h2>
      <button onClick={handleNameChange}>Change name</button>
      <p>You have {numTasks} tasks today</p>
    </header>
  );
}

export default WelcomeBanner;
