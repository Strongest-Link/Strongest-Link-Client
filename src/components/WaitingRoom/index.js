import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css"



 
const WaitingRoom = ({ setGame, gameData, socket }) => {
    // useeffect for constantly checking players in lobby
    // let {lobbyName} = useParams()
    // const [lobbyData, setLobbyData] = useState("")
    // const [players, setPlayers] = useState("")
    // const {input} = this.props.location.input
    // const getData = async() => { 
    // console.log(data[0].name)
    // console.log(data)
    // setLobbyData(data)
    // setPlayers(data.players)
    // console.log(lobbyData)
    // console.log(lobbyData)
    // after post request look for lobby with specified name
    // socket.on("connect", () => {
    //     console.log("connected to socket", socket.id)})
    // socket.emit("setusername", (data))
    // socket.emit('joinroom',(data.name))
    console.log(gameData);

    
    socket.on('game', (username) => {
        setGame({
            ...gameData,
            players: [...gameData.players, username]
        });
    });
    
    // if(data.players.length == 2){
    // window.open(`/Quiz/${data.options.category}/${data.options.level}/${data.options.totalQuestions}`)}}
    // useEffect(() => {
    //     getData()
    // },[])     
       
      
       return(
        <>
        <div>
            <h1>Hello world</h1>
            <h3>{gameData.name}</h3>
            <ul>
            {
                gameData.players.map(player => (
                    <li>{player}</li>
                ))
            }
            </ul>
        </div>
        </>
        

    )
  
    
}
export default WaitingRoom
