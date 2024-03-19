import React, { useEffect, useState } from 'react'
import './QuestionContainer.css';
import QuizEnded from './QuizEnded';
import Timer from './Timer';

const QuestionContainer = (props) => {

    const [score, setScore] = useState(0);
    const [lastQuestion, setLastQuestion] = useState(false);
    const [seconds, setSeconds] = useState(5);
    const [timeUp, setTimeUp] = useState(false);

    const {obj, quesNo, nextQues, index} = props;
    const {question, answers, correct_answers} = obj;

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
        if (answersArr[idx] === 'true') {
            setScore(score+1)
        }
    }

    // useEffect(()=> {
    //     setSeconds(5);
    // },[index])

    useEffect(()=> {

        const timer = setInterval(()=> {
            setSeconds(seconds-1);
        },1000)

        if (seconds === 0) {
            clearInterval(timer);
            setTimeUp(true);
            return;
        }

        return () => {
            clearInterval(timer);
        }

    },[seconds])
   
    return (
        <div>

            {
                lastQuestion ? <QuizEnded score={score}/> :
                <div className='question-container'>
                    <h1>Quiz App</h1>
                    <h2>Question {quesNo}</h2>
                    <p className='question'>Q.) {question} </p>
                    <ul>
                        
                        {
                            optionsArr.map((option,idx) => {
                                return <li onClick={()=>{
                                    if (timeUp) {
                                        nextQues(setLastQuestion);
                                        return;
                                    }
                                    checkAnswer(idx);
                                    nextQues(setLastQuestion);
                                    setSeconds(5);
                                }}>{option}</li>
                            })
                        }
                        
                    </ul>
                    <Timer seconds={seconds}/>
                    <button onClick={()=>{
                        nextQues(setLastQuestion);
                        setSeconds(5);
                    }}>Skip Question</button>
                </div>  
            }

        </div>
        
    )
}

export default QuestionContainer;
