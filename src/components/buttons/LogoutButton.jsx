import { logout } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout(user, setUser);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };
  return (
    <span className="text-warning" onClick={handleLogout}>
      Logout
    </span>
  );
}
