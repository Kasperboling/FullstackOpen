import Header from './Header';
import Total from './Total';
import Content from './Content';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content content={part1.name} />
      <Content content={part2.name} />
      <Content content={part3.name} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App
