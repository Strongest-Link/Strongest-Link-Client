import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const CreateRoom = ({ setGame, socket }) => {
  const [category, setCategory] = useState([]);
  //create a function that maps 1-20
  const [input, setInput] = useState({
    options: { totalQuestions: 5, category: 9, level: "easy" },
    host: "user",
    name: "lobby"
  });

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
  }, []);

  const postData = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/games", input);
      setGame(data);
    } catch (err) {
      console.log("Error sending lobby data");
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await postData();
    await socket.emit("joinroom", input.name);
    await socket.emit("setusername", input.host);
    socket.username = input.host;
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
      <section className="create-section">
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
