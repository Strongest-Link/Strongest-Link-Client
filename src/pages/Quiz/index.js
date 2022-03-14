import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";

function Quiz() {

    const questionElement = document.getElementById("question");
    let questionFoundFromDOM = ReactDOM.findDOMNode(questionElement);


    const choiceTextElements = document.getElementsByClassName('choice-text');
    const choices = [];

    if(choiceTextElements.length===4){
        choices[0] = ReactDOM.findDOMNode(choiceTextElements[0]);
        choices[1] = ReactDOM.findDOMNode(choiceTextElements[1]);
        choices[2] = ReactDOM.findDOMNode(choiceTextElements[2]);
        choices[3] = ReactDOM.findDOMNode(choiceTextElements[3]);
    }

    const c = document.getElementById("progressText");
    const progressText = ReactDOM.findDOMNode(c);

    const d = document.getElementById("score");
    const scoreText = ReactDOM.findDOMNode(d);

    const e = document.getElementById("progressBarFull");
    const progressBarFull = ReactDOM.findDOMNode(e);

    let currentQuestion = {};
    let acceptingAnswers = false;
    let score = 0;
    let questionCounter = 0;
    let availableQuesions = [];

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
    
                console.log(formattedQuestion);
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
        availableQuesions = [...questions];
        getNewQuestion();
    };
    
    function getNewQuestion (){
        if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            //go to the end page
            return window.location.assign('');
         
        }
        questionCounter++;
        progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        //Update the progress bar
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
        const questionIndex = Math.floor(Math.random() * availableQuesions.length);
        currentQuestion = availableQuesions[questionIndex];

        questionFoundFromDOM.innerText = currentQuestion.question;
    
        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });
    
        availableQuesions.splice(questionIndex, 1);
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
    

  return (

    <div class="container">
    <div id="game" class="justify-center flex-column">
      <div id="hud">
        <div id="hud-item">
          <p id="progressText" class="hud-prefix">
            Question
          </p>
          <div id="progressBar">
            <div id="progressBarFull"></div>
          </div>
        </div>
        <div id="hud-item">
          <p class="hud-prefix">
            Score
          </p>
          <h1 class="hud-main-text" id="score">
            0
          </h1>
        </div>
      </div>
      <h2 id="question">What is the answer to this questions?</h2>
      <div class="choice-container">
        <p class="choice-prefix">A</p>
        <p class="choice-text" data-number="1">Choice 1</p>
      </div>
      <div class="choice-container">
        <p class="choice-prefix">B</p>
        <p class="choice-text" data-number="2">Choice 2</p>
      </div>
      <div class="choice-container">
        <p class="choice-prefix">C</p>
        <p class="choice-text" data-number="3">Choice 3</p>
      </div>
      <div class="choice-container">
        <p class="choice-prefix">D</p>
        <p class="choice-text" data-number="4">Choice 4</p>
      </div>
    </div>
  </div>
  );

  }

export default Quiz;