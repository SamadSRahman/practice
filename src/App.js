import "./App.css";
import ListComponent from './ListComponent/listComponent'
import { Provider } from "react";
function App() {
  return <div className="App">
    <Provider>
      <ListComponent />
    </Provider>
    
  </div>;
}

export default App;
