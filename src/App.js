import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/userContext";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Home from "./page/Home/Home";

function App() {
  return (
    <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </UserProvider>
  );
}

export default App;
