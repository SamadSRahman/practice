import styles from "./App.module.css";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/aboutus";
import { Login } from "./pages/login";


function App() {
  return (
    <div className="App">
     
      <Home />
      <AboutUs />
      <Login />
    </div>
  );
}

export default App;
