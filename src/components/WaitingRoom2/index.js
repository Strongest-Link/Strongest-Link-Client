import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css"



 
const WaitingRoom2 = () => {
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
    socket.emit("Host has joined waiting room")
    /*if(data.players.length == 5){
    window.open(`/Quiz/${i.topic}/${input.difficulty}/${input.questions}`)}*/}
useEffect(() => {
    getData()
},[])     
       /*if(data.players.length == 5){
        window.open(`/Quiz/${input.topic}/${input.difficulty}/${input.questions}`)
       }*/
      
       return(
        <>
        <div>
            <h1>Hello world</h1>
            <h2>Waiting room: {lobbyData.name}</h2>
            <div><div className="small-header">Players: </div> {players.map((eachPlayer) => {return ( <span>{eachPlayer} <b>|</b> </span>)})}</div>
           
            
            
        </div>
        </>
        

    )
  
    
}
export default WaitingRoom2;
