import React, { Component } from "react";

class QuestionProgressBar extends Component {

    render() {


        return (
            <div role="progressGroup" id="progressGroup"> 
                <p role="progressText" id="progressText" className="hud-prefix">
                    Question <span role="questionCounter" id="questionCounter">0</span>/{this.props.maxQuestions}
                </p>
                <div role="progressBar" id="progressBar">
                    <div id="progressBarFull"></div>
                </div>
            </div>
            
        );
    }

}
export default QuestionProgressBar;