import React, {useState, useEffect} from "react";
import axios from "axios";



  // Need to fetch categories
  //need to pick number of qns
  //need to set difficulty
  //need to hard code multiple choice
  //default encoding
  //need create game button



const CreateRoom = () =>{
    const [category, setCategory] = useState(9)
    const [categorySelect, setCategorySelect] = useState([])
    const [difficulty, setDifficulty] = useState("medium")
    const [numberOfQuestions, setnumberOfQuestions] = useState(10)
    //create a function that maps 1-20

    
    const fetchCategories = async () => {
    try{
        const data = await axios.get("https://opentdb.com/api_category.php")
        console.log(data.data.trivia_categories)
        const response = data.data.trivia_categories
        setCategorySelect(response)

    }
    catch(err){
        console.log("cant fetch categories")
    }
    
    
}
useEffect(() => {
    fetchCategories();
}, [])

const handleChangeCategory = (e) => {
    setCategory(e.target.value);
 
  };

  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleChangeNoOfQs = (e) => {
    setnumberOfQuestions(e.target.value);

  };


  const handleSubmit = (e) => {
    e.preventDefault();

     window.open(`/Quiz/${category}/${difficulty}/${numberOfQuestions}`);
  }



return (
    <>
    <h1>Create a game</h1>
    <section>
    <form className="gameForm" onSubmit={handleSubmit} >
       
    <h3>Category</h3>
        <select className="categories" onChange={handleChangeCategory}>
            {categorySelect.map(testing => <option value={testing.id}>{testing.name}</option>)}
        </select>
        <h3>Difficulty</h3>
        <select className="difficulty" name="difficulty" onChange={handleChangeDifficulty}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
    <h3>Number of Questions</h3>
    <select className = "NumberOfQuestions" onChange={handleChangeNoOfQs}>
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
export default CreateRoom;
