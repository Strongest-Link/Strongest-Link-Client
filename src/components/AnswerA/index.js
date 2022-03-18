import React, { Component } from "react";

class AnswerA extends Component {

    render() {

        var decodedText = decodeURIComponent(this.props.answerText);

        return (
            <div role="choice-container" className="choice-container">
            <p className="choice-prefix">A</p>
            <p role="choice-text" className="choice-text" data-number='1'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerA;