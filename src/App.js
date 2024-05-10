import "./App.css";
import { useState } from "react";
import WelcomeBanner from "./Components/WelcomeBanner";
import TaskManager from "./Components/TaskManager";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <WelcomeBanner />
      <br />
      <TaskManager />
    </>
  );
}

export default App;
