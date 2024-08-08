import React from 'react';

function GameMenuCard({ onStartGame }) {
  return (
    <div className="text-2xl text-spotify-white font-bold mb-4">

      {/* Game Options - Adapt to your needs */}
      <div className="mb-4">
        <label className="text-spotify-black2 block mb-2" htmlFor="difficulty">Difficulty:</label>
        <select className="bg-gray-700 text-spotify-black rounded-md px-3 py-2 w-full" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-spotify-black2 block mb-2" htmlFor="numPlayers">Number of Players:</label>
        <input type="number" className="bg-gray-700 text-spotify-black rounded-md px-3 py-2 w-full" id="numPlayers" defaultValue="1" />
      </div>

      <button className="bg-spotify-green hover:bg-orange-600 text-spotify-black font-bold py-3 px-5 rounded-3xl m-4" onClick={onStartGame}>
        Start Game
      </button>
      <button className="bg-spotify-green hover:bg-orange-600 text-spotify-black font-bold py-3 px-5 rounded-3xl m-4" onClick={onStartGame}>
        Invite Players
      </button>
    </div>
  );
}

export default GameMenuCard;
