import React from 'react'

const QuizEnded = ({score}) => {
  return (
    <div>
      <h2>Quiz Ended</h2>
      <p>Your score: {score}/10</p>
    </div>
  )
}

export default QuizEnded
