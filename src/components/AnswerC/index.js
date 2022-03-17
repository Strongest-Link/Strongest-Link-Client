import React, { Component } from "react";

class AnswerC extends Component {

    render() {
        var decodedText = decodeURIComponent(this.props.answerText);

        return (
            <div className="choice-container">
            <p className="choice-prefix">C</p>
            <p className="choice-text" data-number='3'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerC;