import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const greeting = ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"]
  const [count, setCount] = useState(0)
  function handleOnClick(){
    if(count>=greeting.length-1){
      setCount(0)
    }
    else
    setCount(count+1)
  }
  return (
    <div className="App">
      <h1>{greeting[count]}</h1>
      <button onClick={handleOnClick}>Change Greeting</button>
     
    </div>
  );
}

export default App;
