import React from "react";
import './button.css'

export function Button(props){

    return(
        <button className={props.class} onClick={props.func} style={props.style}>{props.text}</button>
    )
}