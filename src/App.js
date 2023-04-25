import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter } from './redux/btnSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.button.arr)
  
  function handleOnClick(index) {
    dispatch(increaseCounter(index))
  }
  return (
    <div className="App">
      {arr.map((ele,i) => (
        <div className='btnDiv'>
          <button onClick={()=>handleOnClick(i)} >{ele.name}</button>
      </div>
        
      ))}
       <table>
            <thead>
          <tr>
          <th>Button Name</th>
          <th>Times Clicked</th>
            </tr>
          </thead>
          <tbody>
      
                {arr.map((ele) => (
                
                    <tr>
                    <td>{ele.name}</td>
                    <td>{ele.count}</td>
                    </tr>
             
                ))}
              
          </tbody>
           
          </table>
    </div>
  );
}

export default App;
