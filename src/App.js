import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AppNavbar from './components/navbar/AppNavbar';
import './App.css';
import User from './components/User';
import Footer from './components/footer/Footer';
import { getUserBySessionToken } from './services/userService';
import './customStyles/lato-font.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserBySessionToken();
        setUser(data);
      } catch (error) {
        console.error('Login error:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="App fontstyle-lato text-white custom-text-shadow">
      <AppNavbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user" element={<User user={user} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
