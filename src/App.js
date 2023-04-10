import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


function App() {
  const initial = [1,2,4,6,8,10]
  const [random, setRandom] = useState(1)

  function handleOnClick() {
  setRandom((Math.round(Math.random() * 100)))
  }
  return (
    <div className="App">
      <button onClick={handleOnClick}>Change Table</button>
      <h3>Table for Number:{ random}</h3>
      <ul>
        {initial.map((number) => (
          <li>{number*random}</li>
        )
          
        )}
      </ul>
    </div>
  );
}

export default App;
