import React, { useState, useEffect } from 'react'
import Form from './components/form'
import Input from './components/input'
import Header from './components/header'
import Persons from './components/persons'
import personsService from './services/persons.service'

const App = () => {
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => { personsService.getAll().then(setPersons) }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const isDuplicate = persons.some(person => person.name === newName)
    if (isDuplicate) return window.alert(`${newName} is already added to phonebook`)

    const person = {
      name: newName,
      number: newNumber,
    }

    personsService.create(person).then(data => setPersons([...persons, data]))
  }

  const handleRemove = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(person.id).then(() => setPersons(persons.filter(item => item.id !== person.id)))
    }
  }

  const personsToShow = filter ?
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase(), 0))
    : persons

  return (
    <div>
      <Header title='Phonebook' />
      <Input
        label='filter shown with'
        name='filter'
        value={filter}
        onChange={setFilter}
      />
      <Form
        onSubmit={handleSubmit}
        inputs={[
          { name: 'Name', value: newName, onChange: setNewName },
          { name: 'Phone', value: newNumber, onChange: setNewNumber }
        ]}
      />
      <Header title='Numbers' />
      <Persons persons={personsToShow} handleRemove={handleRemove} />
    </div>
  )
}

export default App
