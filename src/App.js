import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home Page/homePage";
import { CreateNotes } from "./Pages/Create Notes/createNotes";
import { UpdateNotes } from "./Pages/Update Page/updateNotes";
import { DeleteNotes } from "./Pages/Delete Notes/deleteNotes";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNotes />} />
          <Route path="/update" element={<UpdateNotes />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
