import React, { Component } from "react";

class AnswerC extends Component {

    render() {
        var parser = new DOMParser();
        var dom = parser.parseFromString('<!doctype html><body>' + this.props.answerText, 'text/html');
        var decodedText = dom.body.textContent;

        return (
            <div className="choice-container">
            <p className="choice-prefix">C</p>
            <p className="choice-text" data-number='3'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerC;