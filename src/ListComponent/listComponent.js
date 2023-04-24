
import {useDispatch, useSelector} from 'react-redux';
export default function ListComponent() {
    
    

        const dispatch = useDispatch();
        const inputValue = useSelector(state => state.sample.value)
 
        const handleChange = (e) => {
            dispatch({type: 'CHANGE_INPUT_VALUE', payload: e.target.value})
          }
        
    return (
        <div>
            <input onChange={handleChange} value={inputValue} /><br/>
            <button>Add Task</button>
        </div>
    )
}