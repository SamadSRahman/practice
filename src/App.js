
import './App.css';
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'

function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [selected, setSelected] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  let search =[]
  const fruits = ["banana", "orange", "apple", "mango", "grapes", "pineapple", "jackfruit", "dragonfruit", "lichi", "dates", "papaya", "watermelon", "melon", "green apple", "guava"];
  function handleChange(e) {
    setInput(e.target.value)
  
    search = fruits.filter((ele) => {
      const temp = ele;
      if (temp.includes(input)) {
        return temp;
      }
    });

    setList(search);
    setIsVisible(true)
  }
  function handleClick(fruit) {
    const temp = fruits.find((ele) => ele === fruit)
    setSelected(temp)
    setIsVisible(!isVisible)
}
  return (
    <div className='wrapper'>
    <div className='container'>
      <div className='searchBar'>
        
        <label><BsSearch/></label>
        <input onChange={(e) => handleChange(e)} />
     
       
      </div >
      {list.map((ele,index) => (
        <div className='content' style={isVisible ? {} : { display:'none'}}>
           <span onClick={()=>handleClick(ele)} >{ele}</span>
       </div>
      ))}
        </div>
      <div className='outerDiv'>
        <h3>Selcted Fruit: {selected}</h3>
    </div>
    </div>
    
  );
}

export default App;

