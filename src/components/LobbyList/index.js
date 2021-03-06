import React from "react";
import './index.css'

const LobbyList = ({ results }) => {
 
  const displayResults = results.map((eachLobby) => { 

    return (
      <>
        <div className="wholeLobby">
          <div className="eachLobby">
            <span className="lobbyname-div">
              <span className="lobbyname">{eachLobby.name}</span>
            </span>
            <div className="info-div">
                <div><div className="small-header">Host: </div><span>{eachLobby.host}</span></div>
                <div><div className="small-header">Players: </div> {eachLobby.players.map((eachPlayer) => {return ( <span>{eachPlayer} <b>|</b> </span>)})}</div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <ul>{displayResults}</ul>
      </div>
    </>
  );
};

export default LobbyList;
