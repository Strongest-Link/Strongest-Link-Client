import React, { useEffect } from "react";
import "./index.css";

const WaitingRoom = ({ setGame, gameData, socket }) => {
  useEffect(() => {
    socket.on("joinroom", (username) => {
      setGame({
        ...gameData,
        players: [...gameData.players, username]
      });
    });
    socket.on("game", (game) => {
      setGame(game);
      console.log("start game");
    });
  }, []);

  const renderPlayers = () => {
    return (
      <>
        <h2>Current Players:</h2>
        <ul className = "players">
          
          {gameData.players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("startgame", { lobbyName: gameData.name, roomId: gameData.id });
  };

  return (
    <div className = "Waiting">
      <div >
        <h1>{gameData.name}</h1>
        <div>{renderPlayers()}</div>
        <button onClick={handleSubmit}>Start Game</button>
      </div>
      <h1>Scores: </h1>
      <ul className="players">
          {
          Object.keys(gameData.scores).map((player, index) => (
            <li key={index}>{player}: {gameData.scores[player]}</li>
          ))
          }
      </ul>
    </div>
  );
};
export default WaitingRoom;
