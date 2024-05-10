import React from "react";
import { useState } from "react";

function WelcomeBanner() {
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
    </header>
  );
}

export default WelcomeBanner;
