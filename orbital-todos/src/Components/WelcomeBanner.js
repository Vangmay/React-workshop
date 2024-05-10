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
    <header>
      <h1>Orbital todos</h1>
      {hasName ? (
        <>
          <h2>Welcome back! {name}</h2>
        </>
      ) : (
        <h2>Hi there, how may I address you?</h2>
      )}

      {hasName && <p>It is so nice to have you back on the app</p>}

      <button onClick={handleNameChangeEvent}>
        {hasName ? "Change name" : "set name"}
      </button>
      {numTasks > 0 ? (
        <p>
          You have <strong>{numTasks}</strong> left, keep going!{" "}
        </p>
      ) : (
        <p>You are all done</p>
      )}
    </header>
  );
}

export default WelcomeBanner;
