import { useCallback, useState, useEffect } from "react";

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
    <div>
      <h2>Here is an interesting fact</h2>
      <p>{fact}</p>
      <button onClick={handleRefreshClick}>Refresh</button>
    </div>
  );
}
