import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css"



 
const WaitingRoom = () => {
    //useeffect for constantly checking players in lobby
    let {lobbyName} = useParams()
    const [lobbyData, setLobbyData] = useState("")
    const [players, setPlayers] = useState("")
    const getData = async() => {
    const {data} = await axios.get(`http://localhost:8000/games/${lobbyName}`)
    //console.log(data[0].name)
    console.log(data)
    setLobbyData(data)
    setPlayers(data.players)
    //console.log(lobbyData)
    //console.log(lobbyData)
    const socket = io("http://localhost:8000")
    socket.emit("Host has joined waiting room", )
    if(data.players.length == 2){
    window.open(`/Quiz/${data.options.category}/${data.options.level}/${data.options.totalQuestions}`)}}
useEffect(() => {
    getData()
},[])     
       
      
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
