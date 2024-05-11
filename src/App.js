import "./App.css";
import { useState, useEffect } from "react";
import WelcomeBanner from "./Components/WelcomeBanner";
import TaskManager from "./Components/TaskManager";
import FactOfTheDay from "./Components/FactOfTheDay";

function getStoredTasks() {
  const rawTasks = window.localStorage.getItem("tasks");
  if (rawTasks != null) {
    return JSON.parse(rawTasks);
  } else {
    return [];
  }
}

function setStoredTasks(newTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(newTasks));
}

function App() {
  const [tasks, setTasks] = useState(getStoredTasks());

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks]);

  return (
    <div>
      <WelcomeBanner numTasks={tasks.length} />
      <TaskManager tasks={tasks} setTasks={setTasks} />
      <FactOfTheDay />
    </div>
  );
}

export default App;
