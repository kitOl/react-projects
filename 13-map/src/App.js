import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = ["Add 1", "Click me", "Hit me", "Press me"];

const actions = [
  {
    text: "Add 1",
    act: "${incrementCount}",
  },
  {
    act: "${incrementCount}",
    text: "Click me",
  },
  {
    act: "${incrementCount}",
    text: "Hit me",
  },
  {
    act: "${decrementCount}",
    text: "Sub 1",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => (
        <Button key={index} text={text} onClick={incrementCount} />
      ))}

      {/* {texts.map((text) => (
        <Button key={text} text={text} onClick={incrementCount} />
      ))} */}

      {/* {actions.map((action) => (
        <Button key={action.text} text={action.text} onClick={action.act} />
      ))} */}

      {/* <Button text={texts[0]} onClick={incrementCount} />
      <Button text={texts[1]} onClick={incrementCount} />
      <Button text={texts[2]} onClick={incrementCount} />
      <Button text={texts[3]} onClick={decrementCount} /> */}

      {/* <Button text="Add 1" onClick={incrementCount} />
      <Button text="Click 2" onClick={incrementCount} />
      <Button text="Click 3" onClick={incrementCount} />
      <Button text="Sub 1" onClick={decrementCount} /> */}
    </div>
  );
}

export default App;
