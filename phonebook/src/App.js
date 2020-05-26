import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const styles = {
    label: { display: 'block' }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const isDuplicate = persons.some(person => person.name === newName)
    if (isDuplicate) return window.alert(`${newName} is already added to phonebook`)

    const person = {
      name: newName,
      number: newNumber,
    }

    setPersons([...persons, person])
  }

  const Person = ({person}) => (
    <p>{person.name} {person.number}</p>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" style={styles.label}>
          Name: <input type='text' id='name' value={newName} onChange={e => setNewName(e.target.value)}/>
        </label>
        <label htmlFor="phone" style={styles.label}>
          Number: <input type='text' id='phone' value={newNumber} onChange={e => setNewNumber(e.target.value)}/>
        </label>
        <div>
          <button
            type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <Person key={person.name} person={person}/>)}
      </div>
    </div>
  )
}

export default App
