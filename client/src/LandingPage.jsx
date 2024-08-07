import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [spotifyConfig, setSpotifyConfig] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/spotify-config')
      .then(response => {
        console.log('Response from /api/spotify-config:', response);
        return response.json();
      })
      .then(data => {
        console.log('Parsed response from /api/spotify-config:', data);
        setSpotifyConfig(data);
      })
      .catch(error => {
        console.error('Error fetching Spotify config:', error);
      });
  }, []);

  const handleLoginClick = () => {
    if (spotifyConfig) {
        const { clientId, redirectUri } = spotifyConfig;
        const scopes = 'user-read-private user-top-read playlist-read-private';
        const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;
        window.location.href = authorizeUrl;
      } else {
        console.error('Spotify configuration not loaded yet');
      }
    };
    return (
        <div className="bg-spotify-black2 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-spotify-black p-8 rounded-3xl shadow-lg text-center"> {/* Rounded square container */}
                <h1 className="text-4xl font-bold text-spotify-white mb-8">Spotify Friends Quiz</h1>
                <p className="text-lg text-spotify-white mb-8">Challenge your friends to see who knows their music best!</p>
                <button onClick={handleLoginClick} className="bg-spotify-green hover:bg-green-400 text-white font-bold py-3 px-5 rounded-3xl">Login with Spotify</button>
            </div>
        </div>
    );
}

export default LandingPage;
