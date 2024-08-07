import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CgLogOut } from "react-icons/cg";
import GameStart from './Tooling/GameStart.jsx';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'POST',
    })
      .then(() => {
        navigate('/'); // Redirect to login page
      })
      .catch((error) => console.error('Error logging out:', error));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-spotify-green p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Spotify Friends Quiz</h1>
          <button onClick={handleLogout}>
            <CgLogOut className="text-white font-bold " size={30} style={{ marginRight: 10 }} />
          </button>
          {/* You can add other navbar elements here (e.g., user profile, logout button) */}
        </div>
      </nav>

      {/* Main Content */}
      <GameStart />
    </div>
  );
}

export default HomePage;