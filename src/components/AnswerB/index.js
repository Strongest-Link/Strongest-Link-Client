import React, { Component } from "react";

class AnswerB extends Component {

    render() {
        return (
            <div className="choice-container">
            <p className="choice-prefix">B</p>
            <p className="choice-text" data-number='2'>{this.props.answerText}</p>
            </div>
        );
    }

}
export default AnswerB;