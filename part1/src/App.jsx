import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoint] = useState(Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0));
  const [vote, setVote] = useState(points)
  const highestValue = Math.max(...points);
  const highestValueIndex = points.indexOf(highestValue);

  console.log(highestValueIndex);

  return (
    <>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>Has {points[selected]} votes</p>
      <br />
      <button onClick={() => {setVote(points[selected] += 1)}}>Vote</button>
      <button onClick={() => {setSelected(Math.floor(Math.random() * 8))}}>Next anecdotes</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highestValueIndex]}</p>
    </>
  )
}

export default App
