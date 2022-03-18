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
  }, [gameData]);

  const renderPlayers = () => {
    return (
      <>
        <ul>
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
    <>
      <div>
        <h1>Hello world</h1>
        <h3>{gameData.name}</h3>
        <div>{renderPlayers()}</div>
        <button onClick={handleSubmit}>Start Game</button>
      </div>
    </>
  );
};
export default WaitingRoom;
