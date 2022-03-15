import React, {useState} from "react";
import './index.css'

const LobbyList = ({ results }) => {
   
  const [LobbyInfo, showLobbyInfo] = useState(false);
 
  const displayResults = results.map((eachLobby) => { 

    return (
      <>
        <div className="wholeLobby">
          <div className="eachLobby">
            <h2>{eachLobby.name}</h2>
            <div>
              <h3>Host: {eachLobby.host}</h3>
              <h3>Players: {eachLobby.players.map((eachPlayer) => {return ( <h4>{eachPlayer}</h4> )})}</h3>
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
