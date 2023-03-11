import React from "react";

export function Counter(props){
    
    function handleIncrease(){
        props.setCount(props.count+1)
      }
      function handleDecrease(){
        props.setCount(props.count-1)
      }
    return(
    <div>
    <h1 className='heading'>{props.count}</h1>
     <button onClick={handleIncrease}>Increase Count</button>
     <button onClick={handleDecrease}>Decrease Count</button>
     </div>
    )
    }