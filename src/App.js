
import styles from './App.module.css'
import { useState } from 'react';


function App() {
  const [value, setValue] = useState("")
  const [first, setFirst] = useState("")
  const [sec, setSec] = useState("")
  
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0", "."]
  const [isFirst, setIsFirst]= useState(true)
  function handleAdd() {
    setIsFirst(false)
    // if(!value.includes("+"))
      setValue(value + "+")
     if (value.includes("-") || value.includes("/") || value.includes("*"))
      setValue(first+"+")
  }
  function handleSub() {
    setIsFirst(false)
    // if(!value.includes("-"))
      setValue(value + "-")
     if (value.includes("+") || value.includes("/") || value.includes("*"))
      setValue(first+"-")
  }
  function handleMultiply() {
    setIsFirst(false)
    // if(!value.includes("*"))
      setValue(value + "*")
     if (value.includes("-") || value.includes("/") || value.includes("+"))
      setValue(first+"*")
  }
  function handleDivide() {
    setIsFirst(false)
    // if(!value.includes("/"))
      setValue(value + "/")
     if (value.includes("-") || value.includes("+") || value.includes("*"))
      setValue(first+"/")
  }
  function handleEquals() {
    let a = Number(first);
    let b = Number(sec);
    let c=0
    if (isFirst === false) {
      
      if (value.includes("+"))
      {
        setValue(a + b)
        c=a+b
      }
        
      else if (value.includes("-"))
      {
        setValue(a - b)
         c=a-b}
      else if (value.includes("*"))
      {
        setValue(a * b)
      c=a*b}
      else if (value.includes("/"))
      {
        setValue(a / b)
      c=a/b}
    }
    setFirst(c)
    setSec("")
    
  
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.display} >
          <textarea value={value} disabled='true' className={styles.screen} />

         
        </div>
        <div className={styles.btn} >
          <button onClick={handleAdd} className={styles.operators}>+</button>
          <button onClick={handleSub} className={styles.operators}>-</button>
          <button onClick={handleMultiply} className={styles.operators}>*</button>
          <button onClick={handleDivide} className={styles.operators}>/</button>

          {buttons.map((ele) => (
            <button className={styles.digits} onClick={() =>
            
            {
              setValue(value + ele)
              if (isFirst == true) 
                setFirst(first+ele)
              else
                setSec(sec+ele)
            }} >{ele}</button>

          ))}
          <button className={styles.delete} onClick={() => {
            setValue("")
            setIsFirst(true)
            setFirst(0)
            setSec(0)
          }}>Clear</button>
          <button className={styles.equals} onClick={handleEquals}>=</button>
        </div>

      </div>

      
    </div>
    
  );
}

export default App;

