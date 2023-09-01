import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Pages/Home";
import Users from "./Components/Pages/users";
import Login from "./Components/Pages/Login";
import Profile from "./Components/Pages/Profile";
import NotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* 👇️ handle dynamic path */}
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* 👇️ only match this when no other routes match */}
            <Route
              path="*"
              element={<NotFound />} 
            />
          </Routes>
        </BrowserRouter>
    </div>    
  );
}

export default App;
