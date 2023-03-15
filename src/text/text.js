import React from "react";
import './text.css'

export function TextField(){
    function checkLimit(event){
        const text = event.target.value
        console.log(text)
        if(text.length>=100){
             alert ("Character limit of 100 reached")
        }
    }
    return(
        <textarea maxLength={100} onChange={checkLimit}></textarea>
    )
}