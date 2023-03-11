import React from "react";

export function Name(props){

    function handleNameChange(){
        if(props.names==="Amit"){
        props.setNames( "Rajan")
        }
        else {
          props.setNames("Amit")
        }
      }
    return (
        <div>
        <h1>My name is {props.names}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      </div>
    )
}