import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Question from "../../components/Question";
import AnswerA from "../../components/AnswerA";
import AnswerB from "../../components/AnswerB";
import AnswerC from "../../components/AnswerC";
import AnswerD from "../../components/AnswerD";
import QuestionProgressBar from "../../components/QuestionProgressBar";



function Quiz({ gameData, socket  }) {

  let numberOfQuestions  = gameData.questions.length;

  console.log(gameData.questions);
  console.log(socket);



  // //CONSTANTS
  const CORRECT_BONUS = 10;

  // &nbsp; is the text encoding for a space character. Added one to each default state to prove our decoding is working.
  const [theQuestion, setTheQuestion] = useState("Question&nbsp;...");
  const [choiceA, setChoiceA] = useState("Answer&nbsp;A ...");
  const [choiceB, setChoiceB] = useState("Answer&nbsp;B ...");
  const [choiceC, setChoiceC] = useState("Answer&nbsp;C ...");
  const [choiceD, setChoiceD] = useState("Answer&nbsp;D ...");

  useEffect(() => {
  let questionCounter = 0;
  
    //setTheQuestion(gameData.questions[questionCounter].question);


    const choiceTextElements = document.getElementsByClassName("choice-text");
    const choices = [];

    if (choiceTextElements.length === 4) {
      choices[0] = ReactDOM.findDOMNode(choiceTextElements[0]);
      choices[1] = ReactDOM.findDOMNode(choiceTextElements[1]);
      choices[2] = ReactDOM.findDOMNode(choiceTextElements[2]);
      choices[3] = ReactDOM.findDOMNode(choiceTextElements[3]);
    }

    const scoreElement = document.getElementById("score");
    const scoreText = ReactDOM.findDOMNode(scoreElement);

    let currentQuestion = {};
    let acceptingAnswers = false;
    let score = 0;
    let availableQuestions = [];

    let questions = gameData.questions.map((loadedQuestion) => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };

      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );

      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });


    

      return formattedQuestion;
    });


    function getNewQuestion() {

      if (questions.length === 0 || questionCounter >= numberOfQuestions) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
         return window.location.assign("/Leaderboard");
      }

      questionCounter++;
  
      // Update the progress bar using the DOM and not by setState so that we do not trigger useEffect infinite loop
      const questionCounterElement = document.getElementById("questionCounter");
      const progressBarFullElement = document.getElementById("progressBarFull");
      questionCounterElement.innerText = questionCounter;
      progressBarFullElement.style.width = `${
        (questionCounter / numberOfQuestions) * 100
      }%`;

      const questionIndex = Math.floor(Math.random() * questions.length);
      currentQuestion = questions[questionIndex];

      setTheQuestion(currentQuestion.question);
      console.log(currentQuestion);
      setChoiceA(currentQuestion["choice1"]);
      setChoiceB(currentQuestion["choice2"]);
      setChoiceC(currentQuestion["choice3"]);
      setChoiceD(currentQuestion["choice4"]);


      questions.splice(questionIndex, 1);
      acceptingAnswers = true;
    }

    choices.forEach((choice) => {
      choice.addEventListener("click", (e) => {

        //if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        // We need to use == here and not ===. We are only testing that they have the same value.
        var isCorrectAnswer = selectedAnswer == currentQuestion.answer;

        const classToApply = isCorrectAnswer ? "correct" : "incorrect";

        if (classToApply === "correct") {
          incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
          selectedChoice.parentElement.classList.remove(classToApply);
 
          getNewQuestion();

        }, 1000);
      });
    });

    function incrementScore(num) {
      score += num;
      scoreText.innerText = score;
   
    }

    getNewQuestion();
 
  }, [numberOfQuestions]); // These properties must not change otherwise the fetching won't pause for each question

  return (
    <div role="div" className="container">
      <div id="game" className="justify-center flex-column">
        <div id="hud">
          <div id="hud-item">
            <QuestionProgressBar maxQuestions={numberOfQuestions} />
          </div>
          <div id="hud-item">
            <p className="hud-prefix">Score</p>
            <h1 className="hud-main-text" id="score">
              0
            </h1>
          </div>
        </div>
        <Question questionText={theQuestion} />
        <AnswerA answerText={choiceA} />
        <AnswerB answerText={choiceB} />
        <AnswerC answerText={choiceC} />
        <AnswerD answerText={choiceD} />
      </div>
    </div>
  );
}

export default Quiz;
