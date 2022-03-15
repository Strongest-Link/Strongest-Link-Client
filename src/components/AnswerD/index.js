import React, { Component } from "react";

class AnswerD extends Component {

    render() {
        return (
            <div className="choice-container">
            <p className="choice-prefix">D</p>
            <p className="choice-text" data-number='4'>{this.props.answerText}</p>
            </div>
        );
    }

}
export default AnswerD;