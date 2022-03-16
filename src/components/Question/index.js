import React, { Component } from "react";

class Question extends Component {

    render() {

        var parser = new DOMParser();
        var dom = parser.parseFromString('<!doctype html><body>' + this.props.questionText, 'text/html');
        var decodedText = dom.body.textContent;
        

        return (
            <h2 id="question">{decodedText}</h2>
        );
    }

}
export default Question;