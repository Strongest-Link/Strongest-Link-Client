import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const WaitingRoom = () => {
    //useeffect for constantly checking players in lobby
    const [lobbyData, setLobbyData] = useState("")
    const [players, setPlayers] = useState("")
    const getData = async() => {
    const {data} = await axios.get("http://localhost:8000/games")
    //console.log(data[0].name)
    setLobbyData(data[0])
    setPlayers(data[0].players)
    console.log(players)
    //console.log(lobbyData)
    const socket = io("http://localhost:8000")
    socket.emit("Host has joined waiting room")
}
useEffect(() => {
    getData()
}, [])     
       /*if(data.players.length == 5){
        window.open(`/Quiz/${input.topic}/${input.difficulty}/${input.questions}`)
       }*/
      
       return(
        <>
        <div>
            <h1>Hello world</h1>
            <h2>Waiting room: {lobbyData.name}</h2>
            <h3>{players}</h3>
            
            
        </div>
        </>
        

    )
  
    
}
export default WaitingRoom
