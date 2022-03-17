import { render } from "@testing-library/react";
import {React, useState} from "react";
import { io } from "socket.io-client";
import * as components from "../../components/"

//a box with createroom
//loads form to create game
//renders to waiting room
const SPA = () => {
    const socket = io("http://localhost:8000");
    const [game, setGame] = useState("")
    const [mode, setMode ] = useState("")
    const clickCreate = async (e) => {
        e.preventDefault();
        setMode("create");
    }

    const clickJoin = async (e) => {
        e.preventDefault();
        setMode("join");
    }

  
    return(
        <>
            {
                !game ? (
                    mode ? (
                        mode == "create" ?
                        <components.CreateRoom setGame={setGame} socket={socket} /> :
                        <components.JoinRoom setGame={setGame} socket={socket} />
                    ) : (
                        <div>
                            <button onClick={clickCreate}> Create room</button>
                            <button onClick={clickJoin}> Join room</button>
                        </div>
                    )
                ) : (
                    <components.WaitingRoom setGame={setGame} gameData={game} socket={socket} />
                )
            }
        </>
    )
}

export default SPA;
//socket.on - useEffect it
