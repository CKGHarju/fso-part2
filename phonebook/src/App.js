import React, { useState } from 'react'

const App = () => {
  const [ filter, setFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

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

  const personsToShow = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase(), 0)): persons

  return (
    <div>
      <h2>Phonebook</h2>
      <label htmlFor="filter" style={styles.label}>
        filter shown with: <input type='text' id='filter' value={filter} onChange={e => setFilter(e.target.value)}/>
      </label>
      <form onSubmit={handleSubmit}>
        <h2>Add a new</h2>
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
        {personsToShow.map(person => <Person key={person.name} person={person}/>)}
      </div>
    </div>
  )
}

export default App
