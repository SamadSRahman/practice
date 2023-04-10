
import './App.css';
import { useState } from 'react';


function App() {
  const [log, setLog] = useState([])
  const [data, setData] = useState({ elementName: "",
  eventName: "",
  time:""
  })
  const date = new Date()
  const showTime = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+ "\n" +
       date.getHours() 
        + ':' + date.getMinutes() 
    + ":" + date.getSeconds();
  
  function handleMouseOver(ele) {
    setData({
      elementName: ele,
      eventName: "handleMouseOver",
      time:showTime
    })
    setLog([...log, data])
  }
  function handleOnMouseLeave(ele) {
    setData({
      elementName: ele,
      eventName: "handleMouseLeave",
      time:showTime
    })
    setLog([...log, data])
  }
  return (
    <div className="App">
      <div className='elementsContainer'>
     <h1 onMouseOver={()=>handleMouseOver("h1")} onMouseLeave={()=>handleOnMouseLeave("h1")}>Hi I am heading 1</h1>
      <h2 onMouseOver={()=>handleMouseOver("h2")} onMouseLeave={()=>handleOnMouseLeave("h2")}>Hi I am heading 2</h2>
      <div onMouseOver={()=>handleMouseOver("div")} onMouseLeave={()=>handleOnMouseLeave("div")}>I am div</div>
      </div>
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event Name</th>
              <th>Element Name</th>
            </tr>
          </thead>
          <tbody>
            {log.map((ele) => (
              <tr>
                <td>{ele.time}</td>
                <td>{ele.eventName}</td>
                <td>{ele.elementName}</td>
            </tr>
          ))}
          </tbody>
      </table>
      </div>
      </div>
  );
}

export default App;
