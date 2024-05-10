import React from "react";
import { useState } from "react";

function WelcomeBanner({ numTasks }) {
  const [name, setName] = useState();

  function handleNameChange() {
    const newName = prompt("Please enter your name");
    if (newName == "") {
      setName("<Unknown>");
    } else {
      setName(newName);
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
