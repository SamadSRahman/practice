import { React , useState} from "react";
import "./heading.css";

export function Heading(props) {

const [line, setLine] = useState(false)

  
  function handleDeleteClick(id) {
    const removeItem = props.list.filter((element, index) => index !== id)
    props.setList(removeItem);
  }
  function handleCompleteClick() {
    props.setCount(props.count - 1);
    setLine(true);
  }
  const scratchedText = { textDecoration: "line-through" };

  return (
    <div className="task">
        
      <p  style={line ? scratchedText : {}} >
        {props.item}</p>
        
        <div className="btns">
      <button className="completeBtn" onClick={() => handleCompleteClick()}>
        Completed
      </button>
      <button
        className="deleteBtn"
        onClick={() => handleDeleteClick(props.index)}
      >
        X
      </button>
      </div>
    </div>
  );
}
