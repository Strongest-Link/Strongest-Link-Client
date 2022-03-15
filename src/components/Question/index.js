import React, { Component } from "react";

class Question extends Component {
    
    render() {
        return (
            <h2 id="question">{this.props.questionText}</h2>
        );
    }

}
export default Question;