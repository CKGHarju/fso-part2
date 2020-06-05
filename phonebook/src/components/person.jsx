import React from 'react'

export default ({person, handleRemove}) => {
  return <p>{person.name} {person.number} <button onClick={() => handleRemove(person)}>delete</button></p>
}
