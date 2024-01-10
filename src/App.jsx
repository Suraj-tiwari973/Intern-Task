import React from "react";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
