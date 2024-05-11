import { useCallback, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function FactOfTheDay() {
  const [fact, setFact] = useState("Loading...");

  const fetchFact = useCallback(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
      .catch(() => setFact("Failed to load fact!"));
  }, [setFact]);

  useEffect(() => {
    fetchFact();
  }, [fetchFact]);

  const handleRefreshClick = () => {
    fetchFact();
  };

  return (
    <center>
      <h2>Here is an interesting fact</h2>
      <p>{fact}</p>
      <Button variant="contained" onClick={handleRefreshClick}>
        Refresh
      </Button>
    </center>
  );
}
