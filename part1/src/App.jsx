import Header from './Header';
import Total from './Total';
import Content from './Content';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content content={parts[0].name} />
      <Content content={parts[1].name} />
      <Content content={parts[2].name} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </>
  )
}

export default App
