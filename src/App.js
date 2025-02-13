import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Home from "./Home";
import ResetPassword from "./ResetPassword";
import { supabase } from './supabaseClient'; // This assumes supabaseClient.js is in the same directory as authService.js


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
