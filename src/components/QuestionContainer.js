import React, { useRef } from 'react'
import './QuestionContainer.css';

const QuestionContainer = (props) => {

    const quesNo = props.quesNo;
    const {question, answers, correct_answers} = props.obj;

    const optionsArr = [];
    const answersArr = [];

    // gives an array of all options -> (optionsArr)
    for (let idx = 0; idx < Object.keys(answers).length; idx++) {
        const key = Object.keys(answers)[idx];
        if (answers[key] === null) continue;
        optionsArr.push(answers[key]);
    }

    // gives an array of answers (true/false) -> (answersArr)
    for (let idx = 0; idx < Object.keys(correct_answers).length; idx++) {
        const key = Object.keys(correct_answers)[idx];
        answersArr.push(correct_answers[key]);
    }

    // checks answer on click on any option
    function checkAnswer (idx) {
        console.log(idx);
    }
   
    return (
        <div className='question-container'>
            <h1>Quiz App</h1>
            <h2>Question {quesNo}</h2>
            <p className='question'>Q.) {question} </p>
            <ul>
                
                {
                    optionsArr.map((option,idx) => {
                        return <li onClick={()=>checkAnswer(idx)}>{option}</li>
                    })
                }
                
            </ul>
            <p>Time left: <span>5</span> seconds</p>
            <button>Skip Question</button>
        </div>
    )
}

export default QuestionContainer
