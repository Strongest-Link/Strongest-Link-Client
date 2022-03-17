import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css"



 
const WaitingRoom = () => {
    //useeffect for constantly checking players in lobby
    //let {lobbyName} = useParams()
    const [lobbyData, setLobbyData] = useState("")
    const [players, setPlayers] = useState("")
    const {input} = this.props.location.input
    const getData = async() => { 
    const {data} = await axios.get(`http://localhost:8000/games/${input}`)
    //console.log(data[0].name)
    console.log(data)
    setLobbyData(data)
    setPlayers(data.players)
    //console.log(lobbyData)
    //console.log(lobbyData)
    const socket = await io("http://localhost:8000");
    //after post request look for lobby with specified name
    socket.on("connect", () => {
        console.log("connected to socket", socket.id)})
    socket.emit("setusername", (data))
    socket.emit('joinroom',(data.name))
    socket.on('game', (message) => {
        console.log(message)
    })

       
        
    
    if(data.players.length == 2){
    window.open(`/Quiz/${data.options.category}/${data.options.level}/${data.options.totalQuestions}`)}}
useEffect(() => {
    getData()
},[])     
       
      
       return(
        <>
        <div>
            <h1>Hello world</h1>
            <h3>{lobbyData.name}</h3>
            
           
            
            
        </div>
        </>
        

    )
  
    
}
export default WaitingRoom
