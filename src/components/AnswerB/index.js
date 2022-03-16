import React, { Component } from "react";

class AnswerB extends Component {

    render() {
        var parser = new DOMParser();
        var dom = parser.parseFromString('<!doctype html><body>' + this.props.answerText, 'text/html');
        var decodedText = dom.body.textContent;

        return (
            <div className="choice-container">
            <p className="choice-prefix">B</p>
            <p className="choice-text" data-number='2'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerB;