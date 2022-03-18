import React from "react";
import "./index.css";

const LobbyList = ({ results }) => {
  const displayResults = results.map((eachLobby, index) => {
    return (
      <div key={index} className="wholeLobby">
        <div className="eachLobby">
          <span className="lobbyname-div">
            <span className="lobbyname">{eachLobby.name}</span>
          </span>
          <div className="info-div">
            <div>
              <div className="small-header">Host: </div>
              <span>{eachLobby.host}</span>
            </div>
            <div>
              <div className="small-header">Players: </div>{" "}
              {eachLobby.players.map((eachPlayer, index2) => {
                return (
                  <span key={index2}>
                    {eachPlayer} <b>|</b>{" "}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div role="displayResults">
        <ul>{displayResults}</ul>
      </div>
    </>
  );
};

export default LobbyList;
