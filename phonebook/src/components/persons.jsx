import React from 'react'
import Person from './person'

export default ({persons}) => {
  return (
    <div>
      <div>
        {persons.map(person => <Person key={person.name} person={person}/>)}
      </div>
    </div>
  )
}
