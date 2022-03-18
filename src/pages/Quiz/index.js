import React, { useState, useEffect } from "react";
import "./index.css";
import Question from "../../components/Question";
import AnswerA from "../../components/AnswerA";
import AnswerB from "../../components/AnswerB";
import AnswerC from "../../components/AnswerC";
import AnswerD from "../../components/AnswerD";
import QuestionProgressBar from "../../components/QuestionProgressBar";

function Quiz({ setGame, gameData, socket }) {
  // // &nbsp; is the text encoding for a space character. Added one to each default state to prove our decoding is working.
  const [theQuestion, setTheQuestion] = useState("Question&nbsp;...");
  const [choiceA, setChoiceA] = useState("Answer&nbsp;A ...");
  const [choiceB, setChoiceB] = useState("Answer&nbsp;B ...");
  const [choiceC, setChoiceC] = useState("Answer&nbsp;C ...");
  const [choiceD, setChoiceD] = useState("Answer&nbsp;D ...");
  const [score, setScore] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedChoice = e.target.innerText;
    const element = e.target;
    const payload = {
      lobbyName: gameData.name,
      roomId: gameData.id,
      answer: selectedChoice
    };
    socket.emit("answer", payload);
    await socket.on("response", (res) => {
      if (res.response === "It's not your turn.") {
        alert(res.response);
      } else {
        const correctAnswer = res.response.correct;
        // const gameEnd = res.response.gameEnd;
        const classToApply = correctAnswer ? "correct" : "incorrect";
        element.classList.add(classToApply);
        setTimeout(() => {
          element.classList.remove(classToApply);
          setGame(res.response.currentState);
        }, 1000);
      }
    });
  };

  socket.on("next", (res) => {
    setTimeout(() => {
      setGame(res.response.currentState);
    }, 1000);
  });

  let questions = [];
  gameData.questions.map((question) => {
    return questions.push(question);
  });
  let answerArray = [];
  for (const q in questions) {
    let array = [];
    array.push(questions[q].correct_answer);
    questions[q].incorrect_answers.map((answer) => {
      return array.push(answer);
    });
    answerArray.push(array);
  }
  useEffect(() => {
    const username = socket.username;
    for (const score in gameData.scores) {
      if (score === username) {
        setScore(gameData.scores[score]);
      }
    }

    let currentQuestion = gameData.currentQuestion;
    setTheQuestion(decodeURIComponent(questions[currentQuestion].question));
    setChoiceA(decodeURIComponent(answerArray[currentQuestion][0]));
    setChoiceB(decodeURIComponent(answerArray[currentQuestion][1]));
    setChoiceC(decodeURIComponent(answerArray[currentQuestion][2]));
    setChoiceD(decodeURIComponent(answerArray[currentQuestion][3]));

    // Update the progress bar using the DOM and not by setState so that we do not trigger useEffect infinite loop
    const questionCounterElement = document.getElementById("questionCounter");
    const progressBarFullElement = document.getElementById("progressBarFull");
    questionCounterElement.innerText = currentQuestion;

    progressBarFullElement.style.width = `${
      (currentQuestion / gameData.questions.length) * 100
    }%`;
  }, [gameData]);

  return (
    <div className="container">
      <div id="game" className="justify-center flex-column">
        <div id="hud">
          <div id="hud-item">
            <QuestionProgressBar maxQuestions={gameData.questions.length} />
          </div>
          <div id="hud-item">
            <p className="hud-prefix">Score</p>
            <h1 className="hud-main-text" id="score">
              {score}
            </h1>
          </div>
        </div>
        <Question questionText={theQuestion} />
        <div onClick={handleSubmit}>
          <AnswerA answerText={choiceA} />
        </div>

        <div onClick={handleSubmit}>
          <AnswerB answerText={choiceB} />
        </div>

        <div onClick={handleSubmit}>
          <AnswerC answerText={choiceC} />
        </div>

        <div onClick={handleSubmit}>
          <AnswerD answerText={choiceD} />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
