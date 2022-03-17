import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import "./index.css";
import { WaitingRoom } from "..";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

// Need to fetch categories
//need to pick number of qns
//need to set difficulty
//need to hard code multiple choice
//default encoding
//need create game button

const CreateRoom = ({ setGame, socket }) => {
  const [category, setCategory] = useState([]);
  const history = useHistory();

  //create a function that maps 1-20

  const fetchCategories = async () => {
    try {
      const data = await axios.get("https://opentdb.com/api_category.php");
      const response = data.data.trivia_categories;
      setCategory(response);
    } catch (err) {
      console.log("cant fetch categories");
    }
  };

  useEffect(() => {
    fetchCategories();
    const socket = io("http://localhost:8000");
    socket.on("connect", () => {
      console.log("connected to socket", socket.id);
    });
  }, []);

  const [input, setInput] = useState({
    options: { totalQuestions: 5, category: 9, level: "easy" },
    host: "user",
    name: "lobby"
  });

  //handling connection to trial server
  //post data to server
  //server creates lobby with lobbyname
  //connect to room with lobbyname and register host
  //once connected send host to waiting room

  const postData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        socket.emit("setusername", input.host);
        socket.emit("joinroom", input.name);
        const { data } = await axios.post("http://localhost:8000/games", input);
        setGame(data);
        resolve();
      } catch (err) {
        console.log("Error sending lobby data");
        reject("Error sending lobby data");
      }
    });
  };

  async function handleSubmit(e) {
    //store data in a state
    //post request to server
    //server creates room based on data
    //initialise a connection to socket.io
    //connect to specified room
    //get data about room from localhost route
    e.preventDefault();
    await postData();
    console.log(input);
    setInput({
      options: { totalQuestions: 5, category: 9, level: "easy" },
      host: "user",
      name: "lobby"
    });
    //history.push(`/Waiting-room/${lobbyName}`)
    // render(<WaitingRoom/> )
  }

  function handleInput(e) {
    const eventName = e.target.name;

    if (eventName === "category") {
      input.options["category"] = e.target.value;
    }
    if (eventName === "difficulty") {
      input.options["level"] = e.target.value;
    }
    if (eventName === "NumberOfQuestions") {
      input.options["totalQuestions"] = e.target.value;
    }
    if (eventName === "nickname") {
      setInput({ ...input, host: e.target.value });
    }
    if (eventName === "lobbyname") {
      setInput({ ...input, name: e.target.value });
    }
  }

  return (
    <>
      <h1 className="create-header">Create a game</h1>
      <section>
        <form className="gameForm" onSubmit={handleSubmit}>
          <h3>Category</h3>
          <select className="categories" name="category" onChange={handleInput}>
            {category.map((testing) => (
              <option key={testing.id} value={testing.id}>
                {testing.name}
              </option>
            ))}
          </select>

          <h3>Difficulty</h3>
          <select
            className="difficulty"
            name="difficulty"
            onChange={handleInput}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <h3>Number of Questions</h3>
          <select
            className="NumberOfQuestions"
            name="NumberOfQuestions"
            onChange={handleInput}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>

          <h3> Nickname</h3>
          <input type="text" name="nickname" onChange={handleInput}></input>

          <h3>Lobby Name</h3>
          <input type="text" name="lobbyname" onChange={handleInput}></input>

          <input
            className="create-button"
            type="submit"
            value="Create a game"
          />
        </form>
      </section>
    </>
  );
};
export default CreateRoom;
