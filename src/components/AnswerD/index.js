import React, { Component } from "react";

class AnswerD extends Component {

    render() {

        var decodedText = decodeURIComponent(this.props.answerText);

        return (
    
            <div role="choice-container" className="choice-container">
            <p className="choice-prefix">D</p>
            <p role="choice-text" className="choice-text" data-number='4'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerD;