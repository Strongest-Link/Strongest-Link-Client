import React, { Component } from "react";

class AnswerC extends Component {

    render() {
        var decodedText = decodeURIComponent(this.props.answerText);

        return (
            <div role="choice-container" className="choice-container">
            <p className="choice-prefix">C</p>
            <p role="choice-text" className="choice-text" data-number='3'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerC;