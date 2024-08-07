import React, { useState } from 'react';
import GameMenuCard from './GameMenuCard'; // Adjust path if necessary
import { RiCloseLargeFill } from "react-icons/ri";

const GameStart = () => {
  const [showGameMenu, setShowGameMenu] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleStartGame = (options) => {
    // Process the selected game options (e.g., difficulty, numPlayers)
    console.log("Starting game with options:", options); // Replace with actual game start logic

    // Close the game menu and options menu
    setShowGameMenu(false);
    setShowOptions(false); 
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
  };

  return (
    <div className="container h-96 mx-auto p-8 flex flex-col items-center justify-center relative">
      {/* How to Play Section (conditionally rendered) */}
      {!showGameMenu && ( 
        <>
          <h2 className="text-3xl text-spotify-white font-bold mb-6">How to Play</h2>
          <p className="text-lg text-spotify-white mb-8">Explain the game mechanics and how to win.</p>
        </>
      )}

      {/* Toggle Game Menu Button */}
      {!showGameMenu && ( 
        <>
      </>
      )}
      {/* Toggle options button */}
      <button
        className="bg-spotify-green font-bold py-3 px-5 rounded-3xl"
        onClick={() => setShowOptions(true)}
      >
        Create Game
      </button>

      {/* Game Menu Card */}

      {/* Options Menu */}
      {showOptions && (
  <div
    className="absolute top-25 left-0 w-full h-full bg-spotify-black flex justify-center items-center"
  >
    <div
      className="top-1/3 bg-spotify-black2 p-8 h-[500px] rounded-3xl text-spotify-white shadow-md relative" 
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 p-3" // Add padding and adjust position
        onClick={handleCloseOptions}
      >
        <RiCloseLargeFill
          className="text-white"
          size={20}
        />
      </button>
      <h3 className="text-2xl text-spotify-white font-bold mb-4">Game Options</h3>
      <GameMenuCard/> 
    </div>
  </div>
)}
    </div>
  );
};

export default GameStart;
