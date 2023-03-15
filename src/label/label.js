import React from "react";
import './label.css'

export function Label(props){
    return(
        <label onClick={props.func} className={props.class}>{props.text}</label>
    )
}