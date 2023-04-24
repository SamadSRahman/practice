import "./App.css";
import React from "react";
import Counter from "./ReduxCounterApp/Counter";
import { Provider } from "react-redux";
import store from "./ReduxCounterApp/store";

function App() {
  return <div className="App">
    <Provider store={store}>
      <div>
        <Counter />
      
      </div>
    </Provider>
    
  </div>;
}

export default App;