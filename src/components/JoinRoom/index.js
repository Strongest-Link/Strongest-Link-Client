import React, { useState, useEffect } from "react";
import axios from "axios";
import { LobbyList } from "../../components";
import "./index.css";

const JoinRoom = ({ socket, setGame }) => {
  const [state, setState] = useState({ lobbyname: "", nickname: "" });
  const [lobbydata, setLobbydata] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    const eventName = e.target.name;

    if (eventName === "lobbyname") {
      const lobbyName = e.target.value;
      setState({ ...state, lobbyname: lobbyName });
    }
    if (eventName === "nickname") {
      const nickName = e.target.value;
      setState({ ...state, nickname: nickName });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let lobbyName = state.lobbyname.replace(/\s/g, "%20");
    let nickName = state.nickname;
    // add person to the players array
    const toSend = { username: nickName };
    axios
      .post(`http://localhost:8000/games/${lobbyName}`, toSend)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    await socket.emit("setusername", nickName);
    socket.username = nickName;
    socket.username = nickName;
    await socket.emit("joinroom", lobbyName);
    // history.push(`/Waiting-room/${lobbyName}`)
  };

  async function getLobbyData() {
    try {
      let { data } = await axios.get(`http://localhost:8000/games`);
      setLobbydata(data);
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    getLobbyData();
  }, []);

  return (
    <div className="join-div">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="lobbyId">
            <h3>Enter Lobby Name</h3>
          </label>
          <input
            placeholder="Lobby Name"
            aria-label="lobbyName"
            name="lobbyname"
            onChange={handleInput}
            type="text"
            value={state.lobbyId}
            required
          />
          <br />
          <label htmlFor="nickname">
            <h3>Enter Your Nickname</h3>
          </label>
          <input
            placeholder="Nickname"
            aria-label="nickname"
            name="nickname"
            onChange={handleInput}
            type="text"
            value={state.nickname}
            required
          />
          <br />
          <button type="submit">Join</button>
        </form>
        <br />
        <br />
      </div>
      <h1 className="lobbies-header">Open Lobbies</h1>
      <div className="lobby-div">
        <LobbyList results={lobbydata} />
      </div>
    </div>
  );
};

export default JoinRoom;
