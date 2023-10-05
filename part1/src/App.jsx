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
      <table>
        <tbody>
          <tr>
            <th align='left'><StatisticLine text="good"/></th>
            <th><StatisticLine value={props.good}/></th>
          </tr>
          <tr>
            <th align='left'><StatisticLine text="Neutral"/></th>
            <th><StatisticLine value={props.neutral}/></th>
          </tr>
          <tr>
            <th align='left'><StatisticLine text="Bad"/></th>
            <th><StatisticLine value={props.bad}/></th>
          </tr>
          <tr>
            <th align='left'><StatisticLine text="All"/></th>
            <th><StatisticLine value={all}/></th>
          </tr>
          <tr>
            <th align='left'><StatisticLine text="Average"/></th>
            <th><StatisticLine value={average.toFixed(3)}/></th>
          </tr>
          <tr>
            <th align='left'><StatisticLine text="Positive"/></th>
            <th><StatisticLine value={positive.toFixed(0)}/></th>
          </tr>
        </tbody>
      </table>
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
