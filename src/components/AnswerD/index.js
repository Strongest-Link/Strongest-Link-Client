import React, { Component } from "react";

class AnswerD extends Component {

    render() {

        var decodedText = decodeURIComponent(this.props.answerText);

        return (
    
            <div className="choice-container">
            <p className="choice-prefix">D</p>
            <p className="choice-text" data-number='4'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerD;