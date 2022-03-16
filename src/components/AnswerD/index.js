import React, { Component } from "react";

class AnswerD extends Component {

    render() {
        
        var parser = new DOMParser();
        var dom = parser.parseFromString('<!doctype html><body>' + this.props.answerText, 'text/html');
        var decodedText = dom.body.textContent;

        return (
    
            <div className="choice-container">
            <p className="choice-prefix">D</p>
            <p className="choice-text" data-number='4'>{decodedText}</p>
            </div>
        );
    }

}
export default AnswerD;