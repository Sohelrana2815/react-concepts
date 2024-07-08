import { useState } from "react";
import "./App.css";

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleCount}> Count: {count}</button> <br />
      <br />
    </>
  );
}

function App() {
  return (
    <>
      <CounterButton></CounterButton>
      <CounterButton></CounterButton>
      <CounterButton></CounterButton>
    </>
  );
}

export default App;
