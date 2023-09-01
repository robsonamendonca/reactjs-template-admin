// Routes.js
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from "./Components/Pages/Home";
import Users from "./Components/Pages/users";
import Login from "./Components/Pages/Login";
import Profile from "./Components/Pages/Profile";

const Routes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      {/* 👇️ handle dynamic path */}
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Home />} />
      {/* 👇️ only match this when no other routes match */}
      <Route
        path="*"
        element={
          <div>
            <h2>404 Page not found etc</h2>
          </div>
        }
      />
    </Routes>
  );
};

export default Routes;
