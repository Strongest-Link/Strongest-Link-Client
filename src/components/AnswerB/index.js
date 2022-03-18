import React, { Component } from "react";

class AnswerB extends Component {

    render() {
        var decodedText = decodeURIComponent(this.props.answerText);

        return (
            <div className="choice-container">
            <p className="choice-prefix">B</p>
            <p className="choice-text" data-number='2'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerB;