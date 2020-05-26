import React from 'react'

const Header = ({ name }) => (
  <h2>{name}</h2>
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

export default Course;
