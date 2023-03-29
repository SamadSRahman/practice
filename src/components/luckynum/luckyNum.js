import { useState } from 'react'
import styles from './luckyNum.module.css'

export function LuckyNum(props){
    const luckyNum = 404
    let newData = null
  
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    const [show, setShow] = useState(false)

    function handleOnChange(e){
         newData = e.target.value;
         setData(newData)

    }
  function  handleOnClick(){
    setCount(count+1)
    if(data<luckyNum){
        alert("You have guessed a smaller number")
        console.log("data")
    }
    else if(data>luckyNum){
        alert("You have guessed a larger number")
    }
    else{
        setShow(true)
    }
    }

    return(
        <>
        <div className={styles.container}>
           <div>
        <input className={styles.userInp} type='number' onChange={handleOnChange} placeholder='Guess Lucky Number...'/>
        <button className={styles.matchBtn} onClick={handleOnClick}>Match Number</button>
        </div>
       
        </div>
         <div className={styles.resDiv}>
         <h4 style={show?{}:{display:'none'}}>Congratulations you guessed the right number in {count} attempts</h4>
         </div>
         </>
    )
}