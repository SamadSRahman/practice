import React from "react";
import './input.css'

export function Input(props){
    return(
        <input className={props.class} type={props.type}></input>
    )
}