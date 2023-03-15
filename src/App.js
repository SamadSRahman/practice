import './App.css';

import { Image } from './image/image';
import { TextField } from './text/text';
import { LoginPage } from './loginPage/loginPage';
function App() {
  return (
    <div className="App">
      
       <Image/><br/>
       <TextField/><br/>
      <LoginPage/>
     
    </div>
  );
}

export default App;