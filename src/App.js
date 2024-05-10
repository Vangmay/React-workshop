import "./App.css";
import { useState } from "react";
import WelcomeBanner from "./Components/WelcomeBanner";
import TaskManager from "./Components/TaskManager";

const defaultTasks = ["Wash dishes", "Collect mail", "give a react workshop"];

function App() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(defaultTasks);

  return (
    <>
      <WelcomeBanner numTasks={tasks.length} />
      <br />
      <TaskManager tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
