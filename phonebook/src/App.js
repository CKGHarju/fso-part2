import React, { useState, useEffect } from 'react'
import Form from './components/form'
import Input from './components/input'
import Header from './components/header'
import Persons from './components/persons'
import Notification from './components/notification'
import personsService from './services/persons.service'

const App = () => {
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => { personsService.getAll().then(setPersons) }, [])
  useEffect(() => {
    if (error) setTimeout(() => setError(''), 2000)
    if (success) setTimeout(() => setSuccess(''), 2000)
  }, [error, success])

  const addPersonToState = person => setPersons([...persons, person])
  const replacePersonInState = person => setPersons(persons.map(item => item.id === person.id ? person : item))
  const removePersonFromState = person => setPersons(persons.filter(item => item.id !== person.id))

  const handleUpdate = (person) => {
    if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
      const updatedPerson = {
        ...person,
        number: newNumber
      }

      personsService.update(updatedPerson).then(replacePersonInState)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const duplicateEntry = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (duplicateEntry) return handleUpdate(duplicateEntry)

    const person = {
      name: newName,
      number: newNumber,
    }

    personsService.create(person).then((person) => {
      addPersonToState(person)
      setSuccess(`Added ${person.name}`)
    })
  }

  const handleRemove = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(person.id)
        .then(() => removePersonFromState(person))
        .catch(error => setError(`Information of ${person.name} has already been removed from server`))
    }
  }

  const personsToShow = filter ?
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase(), 0))
    : persons

  return (
    <div>
      <Header title='Phonebook' />
      <Notification error={error} success={success}/>
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
