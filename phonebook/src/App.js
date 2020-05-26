import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const isDuplicate = persons.some(person => person.name === newName)
    if (isDuplicate) return window.alert(`${newName} is already added to phonebook`)

    const person = {
      name: newName
    }

    setPersons([...persons, person])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name:</label>
          <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          <button
            type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App
