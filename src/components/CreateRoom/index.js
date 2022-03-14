import React, {useState, useEffect} from "react";
import axios from "axios";

  // Need to fetch categories
  //need to pick number of qns
  //need to set difficulty
  //need to hard code multiple choice
  //default encoding
  //need create game button


const QuizSelect = () =>{
    const [category, setCategory] = useState([])
    const [ difficulty, setDifficulty] = useState([])
    const [numberOfQuestions, setnumberOfQuestions] = useState(1)
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
}, [])

return (
    <>
    <h1>Create a game</h1>
    <section>
    <form className="gameForm" >
       
    <h3>Category</h3>
        <select className="categories">
            {category.map(testing => <option>{testing.name}</option>)}
        </select>
        <h3>Difficulty</h3>
        <select className="difficulty" name="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
    <h3>Number of Questions</h3>
    <select className = "NumberOfQuestions">
        <option value = "5">5</option>
        <option value = "10">10</option>
        <option value = "20">20</option>
    </select>
    <input type = "submit" value ="Create a game"/>


    </form>
    </section>
    
    </>
)
}
export default QuizSelect;
