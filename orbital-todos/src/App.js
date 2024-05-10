import "./App.css";
import { useState, useEffect } from "react";
import WelcomeBanner from "./Components/WelcomeBanner";
import TaskManager from "./Components/TaskManager";

function App() {
  return (
    <div>
      <WelcomeBanner numTasks={10} />
      <TaskManager />
    </div>
  );
}

export default App;
