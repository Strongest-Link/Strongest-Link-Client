import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Question from '../../components/Question';
import AnswerA from '../../components/AnswerA';
import AnswerB from '../../components/AnswerB';
import AnswerC from '../../components/AnswerC';
import AnswerD from '../../components/AnswerD';



function Quiz() {

  const [ theQuestion, setTheQuestion ] = useState('Question ...');
  const [ choiceA, setChoiceA ] = useState('Answer A ...');
  const [ choiceB, setChoiceB ] = useState('Answer B ...');
  const [ choiceC, setChoiceC ] = useState('Answer C ...');
  const [ choiceD, setChoiceD ] = useState('Answer D ...');

  const prop =""

  useEffect((prop) => {

    const choiceTextElements = document.getElementsByClassName('choice-text');
    const choices = [];

    if(choiceTextElements.length===4){
        choices[0] = ReactDOM.findDOMNode(choiceTextElements[0]);
        choices[1] = ReactDOM.findDOMNode(choiceTextElements[1]);
        choices[2] = ReactDOM.findDOMNode(choiceTextElements[2]);
        choices[3] = ReactDOM.findDOMNode(choiceTextElements[3]);
    }

    const progressTextElement = document.getElementById("progressText");
    const progressText = ReactDOM.findDOMNode(progressTextElement);

    const scoreElement = document.getElementById("score");
    const scoreText = ReactDOM.findDOMNode(scoreElement);

    const progressBarFullElement = document.getElementById("progressBarFull");
    const progressBarFull = ReactDOM.findDOMNode(progressBarFullElement);

    let currentQuestion = {};
    let acceptingAnswers = false;
    let score = 0;
    let questionCounter = 0;
    let availableQuestions = [];

    let questions = [];   



    fetch(
        'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
    )
        .then((res) => {
            return res.json();
        })
        .then((loadedQuestions) => {
            questions = loadedQuestions.results.map((loadedQuestion) => {
                const formattedQuestion = {
                    question: loadedQuestion.question,
                };
    
                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1,
                    0,
                    loadedQuestion.correct_answer
                );
    
                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });
    
           
                return formattedQuestion;
            });
            startGame();
        })
        .catch((err) => {
            console.error(err);
        });
    
    // //CONSTANTS
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 3;
    
    function startGame (){
 
       questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];

        getNewQuestion();
    };
    
    function getNewQuestion (){
        if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            //go to the end page
            return window.location.assign('/Leaderboard');
         
        }
        questionCounter++;

        progressText.textContent = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        //Update the progress bar
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];

        setTheQuestion(currentQuestion.question);
             
        setChoiceA(currentQuestion['choice1']);
        setChoiceB(currentQuestion['choice2']);
        setChoiceC(currentQuestion['choice3']);
        setChoiceD(currentQuestion['choice4']);
            
   
        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };
    
    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;
    
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];
    
            const classToApply =
                selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    
            if (classToApply === 'correct') {
                incrementScore(CORRECT_BONUS);
            }
    
            selectedChoice.parentElement.classList.add(classToApply);
    
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });
    });


    
    function incrementScore (num) {
        score += num;
        scoreText.innerText = score;
    };


  }, [prop])

  return (

    <div className="container">
    <div id="game" className="justify-center flex-column">
      <div id="hud">
        <div id="hud-item">
          <p id="progressText" className="hud-prefix">
            Question
          </p>
          <div id="progressBar">
            <div id="progressBarFull"></div>
          </div>
        </div>
        <div id="hud-item">
          <p className="hud-prefix">
            Score
          </p>
          <h1 className="hud-main-text" id="score">
            0
          </h1>
        </div>
      </div>
      <Question questionText={theQuestion} />
      <AnswerA answerText={choiceA}/>
      <AnswerB answerText={choiceB} />
      <AnswerC answerText={choiceC} />
      <AnswerD answerText={choiceD} />
    </div>
  </div>
  );

  }


export default Quiz;