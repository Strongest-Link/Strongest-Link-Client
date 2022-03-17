import React, {useState, useEffect} from "react";
import axios from "axios";
import { io } from "socket.io-client";

import { useHistory } from "react-router"
import { WaitingRoom } from "../WaitingRoom";
import { useParams } from "react-router-dom";
import './index.css'


  // Need to fetch categories
  //need to pick number of qns
  //need to set difficulty
  //need to hard code multiple choice
  //default encoding
  //need create game button


const CreateRoom = () =>{
    const [category, setCategory] = useState([]);const history = useHistory();

    //create a function that maps 1-20

    const fetchCategories = async () => {
        try{
            const data = await axios.get("https://opentdb.com/api_category.php")
            console.log(data.data.trivia_categories)
            const response = data.data.trivia_categories
            setCategory(response)
        }
        catch(err){
            console.log("cant fetch categories")
        }  
    }

    useEffect(() => {
        fetchCategories(); 
        const socket = io("http://localhost:8000");
        socket.on("connect", () => {
        console.log("connected to socket", socket.id)
        })
    }, [])

    
    const [input, setInput ] = useState({options: {totalQuestions: 1 , category: "", level: "level" ,type:"multiple choice", encoding:'Default Encoding'}, host: "user",name: "lobby"})

    let lobbyName = input.name


    //handling connection to trial server
    //post data to server
    //server creates lobby with lobbyname
    //connect to room with lobbyname and register host
    //once connected send host to waiting room


    

    const postData = async() => {
        try{
        const data = await axios.post("http://localhost:8000/games", input)
        //await (console.log(data))
        }
        catch(err) {
            console.log("Error sending lobby data")
        }
    }

    function handleSubmit(e){
        //store data in a state
        //post request to server
        //server creates room based on data
        //initialise a connection to socket.io 
        //connect to specified room
        //get data about room from localhost route
        e.preventDefault();
        postData()
        console.log(input)
        setInput("")
        history.push(`/Waiting-room/${lobbyName}`)
        
    }

    function handleInput(e){
        const eventName = e.target.name;

        if (eventName === 'category') {
            input.options["category"] = e.target.value
        } 
        if (eventName === 'difficulty') {
            input.options["level"] = e.target.value
        }
        if (eventName === 'NumberOfQuestions') {
            input.options["totalQuestions"] = e.target.value
        }
        if (eventName === 'nickname') {
            setInput({ ...input, host: e.target.value });
        }
        if (eventName === 'lobbyname') {
            setInput({ ...input, name: e.target.value });
        }

        console.log(input)
    }

    return (
        <>
        <h1 className="create-header">Create a game</h1>
        <section>
        <form className="gameForm" onSubmit= {handleSubmit} >
        
            <h3>Category</h3>
            <select 
            className="categories"
            name = "category"
            onChange={handleInput} >
                {category.map(testing => <option value={testing.id}>{testing.name}</option>)}
            </select>

            <h3>Difficulty</h3>
            <select 
            className="difficulty"
            name="difficulty"
            onChange={handleInput}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <h3>Number of Questions</h3>
            <select
            className = "NumberOfQuestions"
            name="NumberOfQuestions"
            onChange={handleInput}>
                <option value = "5">5</option>
                <option value = "10">10</option>
                <option value = "20">20</option>
            </select>

            <h3> Nickname</h3>
            <input 
            type = "text"
            name="nickname"
            onChange={handleInput}  >
            </input>

            <h3>Lobby Name</h3>
            <input 
            type = "text"
            name="lobbyname"
            onChange={handleInput}>
            </input>

            <input className='create-button' type = "submit" value ="Create a game"/>

        </form>
        </section>
        
        </>
    )
}
export default CreateRoom;
