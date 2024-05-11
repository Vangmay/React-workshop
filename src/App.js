import "./App.css";
import { useState, useEffect } from "react";
import WelcomeBanner from "./Components/WelcomeBanner";
import TaskManager from "./Components/TaskManager";

// function getStoredTasks() {
//   const rawTasks = window.localStorage.getItem("tasks");
//   if (rawTasks != null) {
//     return JSON.parse(rawTasks);
//   } else {
//     return [];
//   }
// }

// function setStoredTasks(newTasks) {
//   window.localStorage.setItem("tasks", JSON.stringify(newTasks));
// }

function App() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   setStoredTasks(tasks);
  // }, [tasks]);

  return (
    <>
      <WelcomeBanner numTasks={tasks.length} />
      <br />
      <TaskManager tasks={tasks} setTasks={setTasks} />
      <br />
      {/* <FactOfTheDay /> */}
    </>
  );
}

export default App;
