import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <br />
      <br />

      <button onClick={handleCount}>Count : {count}</button>
    </div>
  );
};

export default Button;
