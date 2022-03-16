import React, {useState, useEffect} from "react";
import axios from "axios";
import { io } from "socket.io-client";


  // Need to fetch categories
  //need to pick number of qns
  //need to set difficulty
  //need to hard code multiple choice
  //default encoding
  //need create game button



const QuizSelect = () =>{
    const [category, setCategory] = useState([])



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
const [input, setInput ] = useState({questions: 1 , topic: "", difficulty: "" ,type:"multiple choice", encoding:'Default Encoding', host: "user",name: "lobby"})

//handling connection to trial server
//post data to server
//server creates lobby with lobbyname
//connect to room with lobbyname and register host
//once connected send host to waiting room


const WaitingRoom = () => {
    //useeffect for constantly checking players in lobby
    
    
   useEffect(()=> {  
       const data =  axios.get(`http://localhost:8000/${input.name}`)
       if(data.players.length == 5){
           //Bojin start quiz game here
       } 
       return(
        <>
        <div>
            <h1>Waiting room: {data.name}</h1>
            {data.map( player => {
                <article value = {player.data.players}
                ></article>
                
            })}
            
        </div>
        </>
        

    )
   })
    
}
const initGame = async(e) => {
    try{
    const socket = await io("http://localhost:8000");//after post request look for lobby with specified name
    socket.on("connect", () => {
        console.log("connected to socket", socket.id)})
    const gameData = await axios.get(`http://localhost:8000/${input.name}`)
    socket.on(`connecting to lobby:${gameData.name}`, () =>{
        console.log("connected to lobby")
    })
    socket.on(`load waiting room ${gameData.name}`,
    console.log("loading waiting room") )
    
    
   }
    catch(err){
        console.log("error creating lobby")
    }
} 

const postData = async() => {
    try{
        const data = await axios.post("http://localhost:8000/games", input)
        await (console.log(data))
        }
        catch(err){
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
    //initGame();
    setInput("")
    WaitingRoom()
    
    
}


return (
    <>
    <h1>Create a game</h1>
    <section>
    <form className="gameForm" onSubmit= {handleSubmit} >
       
    <h3>Category</h3>
        <select className="categories" name = "category" onChange={(e) => {setInput({...input,topic:e.target.value})}} >
            {category.map(testing => <option>{testing.name}</option>)}
        </select>
        <h3>Difficulty</h3>
        <select className="difficulty" name="difficulty" onChange={(e) => {setInput({...input,difficulty:e.target.value})}}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
    <h3>Number of Questions</h3>
    <select className = "NumberOfQuestions"  onChange={(e) => {setInput({...input,questions:e.target.value})}}>
        <option value = "5">5</option>
        <option value = "10">10</option>
        <option value = "20">20</option>
    </select>
    <h3> Nickname</h3>
    <input type = "text" onChange={(e) => {setInput({...input,host:e.target.value})}}  >
    </input>
    <h3>Lobby Name</h3>
    <input type = "text" onChange={(e) => {setInput({...input,lobbyName:e.target.value})}}></input>
    <input type = "submit" value ="Create a game"/>


    </form>
    </section>
    
    </>
)
}
export default QuizSelect;
