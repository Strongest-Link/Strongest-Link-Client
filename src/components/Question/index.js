import React, { Component } from "react";

class Question extends Component {

    render() {

        // var parser = new DOMParser();
        // var dom = parser.parseFromString('<!doctype html><body>' + this.props.questionText, 'text/html');
        // var decodedText = dom.body.textContent;

        var decodedText = decodeURIComponent(this.props.questionText);

        return (
            <h2 role="question" id="question">{decodedText}</h2>
        );
    }

}
export default Question;