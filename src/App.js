import "./App.css";
import { useState } from "react";
import WelcomeBanner from "./Components/WelcomeBanner";
import TaskManager from "./Components/TaskManager";
import FactOfTheDay from "./Components/FactOfTheDay";

const defaultTasks = ["Wash dishes", "Collect mail", "give a react workshop"];

function App() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(defaultTasks);

  return (
    <>
      <WelcomeBanner numTasks={tasks.length} />
      <br />
      <TaskManager tasks={tasks} setTasks={setTasks} />
      <br />
      <FactOfTheDay />
    </>
  );
}

export default App;
