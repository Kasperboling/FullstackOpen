import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = all / 3
  const positive = (props.good / all) * 100

  return(
    <>
      <h2>Statistics</h2>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
