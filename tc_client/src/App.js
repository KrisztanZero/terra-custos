import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AppNavbar from "./components/AppNavbar";
import './App.css';
import User from "./components/User";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <AppNavbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
