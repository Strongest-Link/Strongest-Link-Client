import React, { Component } from "react";

class QuestionProgressBar extends Component {

    render() {


        return (
            <div id="progressGroup"> 
                <p id="progressText" className="hud-prefix">
                    Question <span id="questionCounter">0</span>/{this.props.maxQuestions}
                </p>
                <div id="progressBar">
                    <div id="progressBarFull"></div>
                </div>
            </div>
            
        );
    }

}
export default QuestionProgressBar;