import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ name }) => (
  <h1>{name}</h1>
)

const Content = ({ parts }) => parts.map(part => <Part key={part.name} part={part}/>)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => (
  <b>Total of {parts.reduce((total, course) => total += course.exercises, 0)} exercises</b>
)

const Course = ({ course }) => (
  <React.Fragment>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </React.Fragment>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course}/>
}

ReactDOM.render(<App />, document.getElementById('root'))
