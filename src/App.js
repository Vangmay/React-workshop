import "./App.css";
import { useState, useEffect } from "react";
import WelcomeBanner from "./Components/WelcomeBanner";
import TaskManager from "./Components/TaskManager";

function App() {
  return (
    <>
      <header>
        <h1>Orbital todos</h1>
        <h2>Welcome back Name</h2>
        <button>Change name</button>
      </header>
      <main>
        <h2>Add new tasks</h2>
        <form>
          <input />
          <button type="submit">Add task</button>
        </form>

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
          <tr>
            <td>Wash dishes</td>
            <input type="checkbox" />
          </tr>
          <tr>
            <td>Take a shower</td>
            <input type="checkbox" />
          </tr>
          <tr>
            <td>Do laundry</td>
            <input type="checkbox" />
          </tr>
        </tbody>
      </main>
    </>
  );
}

export default App;
