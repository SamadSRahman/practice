import './App.css';
import React from 'react';
import { useState } from 'react';
import { List } from './list';
 import { Counter } from './counter';
import { Name } from './name';


function App() {
   const [count, setCount] = useState(0)
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
 const [names, setNames] = useState("Amit")
  return (
    <div className="App">
      <List list = {list} setList = {setList} name = {name} setName = {setName}/>
      <Counter count={count} setCount={setCount} />
      <Name names={names} setNames={setNames} />
      
    </div>
  );
}

export default App;
