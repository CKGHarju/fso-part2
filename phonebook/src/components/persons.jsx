import React from 'react'
import Person from './person'

export default ({persons, handleRemove}) => {
  return (
    <div>
      <div>
        {persons.map(person => <Person key={person.name} person={person} handleRemove={handleRemove}/>)}
      </div>
    </div>
  )
}
