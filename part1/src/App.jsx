import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.label}</button>
)

const StatisticLine = (props) => (
  <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = all / 3
  const positive = (props.good / all) * 100

  if (!all) return <p>No feedback given</p>

  return(
    <>
      <h2>Statistics</h2>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="Neutral" value={props.neutral}/>
      <StatisticLine text="Bad" value={props.bad}/>
      <StatisticLine text="All" value={all}/>
      <StatisticLine text="Average" value={average}/>
      <StatisticLine text="Positive" value={positive}/>
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
      <Button onClick={() => setGood(good + 1)} label="good" />
      <Button onClick={() => setNeutral(neutral + 1)} label="neutral" />
      <Button onClick={() => setBad(bad + 1)} label="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
