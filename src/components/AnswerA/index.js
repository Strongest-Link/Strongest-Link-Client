import React, { Component } from "react";

class AnswerA extends Component {

    render() {
        return (
            <div className="choice-container">
            <p className="choice-prefix">A</p>
            <p className="choice-text" data-number='1'>{this.props.answerText}</p>
            </div>
        );
    }

}
export default AnswerA;