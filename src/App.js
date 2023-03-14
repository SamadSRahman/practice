
import './App.css';
import {React, useState} from 'react'
import { Heading } from './heading';
import './heading.css'


function App() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])
  const [task, setTask] = useState("")

  function handleChange(event) {
   setTask(event.target.value);
  }
  function handleAdd() {
    setCount(count + 1);
    const newList = list.concat(task);
    setList(newList);
    
  }
  return (
    <div className="App">
      <div className='head'>
      <h1>Pending Tasks({count})</h1>
      {list.map((element,index)=>(
        <Heading count ={count} setCount = {setCount} task = {task} setTask = {setTask} list = {list} setList = {setList}   item = {element} index = {index}/>
      ))
      
      }
      <input type={"text"} onChange={handleChange}></input> <br></br>
      <button className="submitBtn" onClick={handleAdd}>
        Submit
      </button>
      </div>
    </div>
  );
}

export default App;
