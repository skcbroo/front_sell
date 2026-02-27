//import './App.css'; // ✅ Certifique-se que isso esteja no topo
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatPage from './pages/ChatPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
              
                <Route path="/" element={<Home />} />
               <Route path="/chat" element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;





