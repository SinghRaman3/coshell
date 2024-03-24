import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import Topbar from "./components/Topbar.js";

import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";

import Privroute from "./privRoute/Privroute";

function App() {
  return (
    <div className="App">
      <Privroute>
        <Topbar />
        <Navbar />
      </Privroute>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
