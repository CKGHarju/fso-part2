import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/form'
import Input from './components/input'
import Header from './components/header'
import Persons from './components/persons'
const App = () => {
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(({data}) => setPersons(data))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const isDuplicate = persons.some(person => person.name === newName)
    if (isDuplicate) return window.alert(`${newName} is already added to phonebook`)

    const person = {
      name: newName,
      number: newNumber,
    }

    axios.post('http://localhost:3001/persons', person).then(({data}) => setPersons([...persons, person]))
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
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
