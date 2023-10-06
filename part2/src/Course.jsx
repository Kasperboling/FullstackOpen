const Course = ({ courses }) => {
    const reduce = (key) => {
        return (
            <p>{courses[key].parts.reduce((acc, curr) => acc += curr.exercises, 0)}</p>
        )
    }
  return (
    <>
        {courses && courses.map((course, index) =>
            <div key={course.id}>
                <h1>{course.name}</h1>
                    {course.parts.map(part =>
                        <p key={part.id}>{part.name} {part.exercises}</p>
                    )}
                {reduce(index)}
            </div>
        )}
    </>
  )
}

export default Course
