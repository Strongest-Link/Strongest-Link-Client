import { SocketContext } from "../../context/socket";
import React, { useEffect, useContext, useState } from "react";
import * as components from "../../components/";
import Quiz from "../../pages/Quiz";
import "./index.css";

//a box with createroom
//loads form to create game
//renders to waiting room
const SPA = () => {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
    // return () => socket.disconnect();
  });

  const [game, setGame] = useState("");
  const [mode, setMode] = useState("");

  const clickCreate = async (e) => {
    e.preventDefault();
    setMode("create");
  };

  const clickJoin = async (e) => {
    e.preventDefault();
    setMode("join");
  };

  return (
    <>
      {!game ? (
        mode ? (
          mode === "create" ? (
            <components.CreateRoom setGame={setGame} socket={socket} />
          ) : (
            <>
            <h1 className='join-h1'>Join A Game</h1>
            <components.JoinRoom setGame={setGame} socket={socket} />
            </>
          )
        ) : (
          <>
          <h1 className="cr-header">Create or Join a Game</h1>
            <div className="button-div">
              <button onClick={clickCreate}> Create room</button>
              <button onClick={clickJoin}> Join room</button>
            </div>
          </>
        )
      ) : game.active ? (
        <Quiz setGame={setGame} gameData={game} socket={socket} />
      ) : (
        <components.WaitingRoom
          setGame={setGame}
          gameData={game}
          socket={socket}
        />
      )}
    </>
  );
};

export default SPA;
