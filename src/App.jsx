//import './App.css'; // ✅ Certifique-se que isso esteja no topo
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
              
                <Route path="/" element={<Home />} />
              
            </Routes>
        </BrowserRouter>
    );
}

export default App;




