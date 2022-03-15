import React, { Component } from "react";

class AnswerC extends Component {

    render() {
        return (
            <div className="choice-container">
            <p className="choice-prefix">C</p>
            <p className="choice-text" data-number='3'>{this.props.answerText}</p>
            </div>
        );
    }

}
export default AnswerC;