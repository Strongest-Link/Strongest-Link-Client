import React, { Component } from "react";

class AnswerB extends Component {

    render() {
        var decodedText = decodeURIComponent(this.props.answerText);

        return (
            <div role="choice-container" className="choice-container">
            <p className="choice-prefix">B</p>
            <p role="choice-text" className="choice-text" data-number='2'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerB;