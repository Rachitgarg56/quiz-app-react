import React from 'react'

const Timer = ({seconds}) => {
  return (
    <div>
      <p>Time left: <span style={{backgroundColor:"red", borderRadius:"50%", padding:"0.1rem 0.5rem", color:"white"}}>{seconds}</span> seconds</p>
    </div>
  )
}

export default Timer
