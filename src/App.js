import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
function App() {
  const [count, setCount] = useState(0)
  function handleIncrease() {
  setCount(count+1)
}
  function handleDecrease() {
  setCount(count-1)
}


  return (
    <div className='main'>
      <h1>Counter: &nbsp; {count}</h1>
      <Button text="Increase Count" class="IncreaseBtn" function={handleIncrease} />
    <Button text="Decrease Count" class="DecreaseBtn" function={handleDecrease}/>
    </div>
  );
}

export default App;
