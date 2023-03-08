import { useState, useEffect } from 'react'
import Persons from "./komponentit/Persons"
import Filter from "./komponentit/Filter"
import PersonForm from "./komponentit/PersonForm"
import personService from "./services/persons"
import Message from "./komponentit/Message"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newMessage, setMessage] = useState(null)

useEffect(() => {
  personService.getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
}, [])

const addPerson = (event) => {
  event.preventDefault()
  const newPerson = {
    name: newName,
    number: newNumber
  }
  const foundPerson = persons.find(person => person.name === newPerson.name)
  if (foundPerson !== undefined) {
    alert(foundPerson.name + ' already in phonebook')
    return
  }

  personService
    .create(newPerson)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setMessage(newPerson.name + ' added to phonebook')
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    })
    .catch(error => {
      setMessage(error.response.data.error)
    })
}

const handleNewName = (event) => {
  setNewName(event.target.value)
}

const handleNewNumber = (event) => {
  setNewNumber(event.target.value)
}

const handleNewFilter = (event) => {
  setNewFilter(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message = {newMessage} />
      <Filter newFilter = {newFilter} onChange = {handleNewFilter} />
      <h2>add a new</h2>
      <PersonForm 
        addPerson= {addPerson} 
        newName = {newName} 
        newNumber = {newNumber} 
        handleNewName = {handleNewName} 
        handleNewNumber = {handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons = {persons} filterPerson = {newFilter} deletePerson = {setPersons} setMessage = {setMessage}/>
    </div>
  )

}

export default App