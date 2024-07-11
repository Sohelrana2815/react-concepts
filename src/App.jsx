import "./App.css";
import Items from "./Components/Items";
import Button from "./Components/Button";
import Profile from "./Components/Profile/Profile";
import { useState } from "react";
import SameCount from "./Components/SameCount/SameCount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SameCount count={count} setCount={setCount}></SameCount>
      <Profile></Profile>
      <Items></Items>
      <Button></Button>
      <Button></Button>
    </>
  );
}

export default App;
