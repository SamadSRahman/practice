import React, { Fragment } from "react";

export function List(props){


    function handleChange(event) {
        props.setName(event.target.value);
      }
      function handleAdd() {
        const newList = props.list.concat( props.name );
    
        props.setList(newList);
      }

    return(
        <Fragment>
    <div>
        <input onChange={handleChange}></input>
        <button onClick={handleAdd}>Add</button>
        <ul>
        {props.list.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
    </div>
    </Fragment>
    )
}