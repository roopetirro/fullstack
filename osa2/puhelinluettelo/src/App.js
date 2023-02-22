import { useState } from 'react'
import Persons from "./komponentit/Persons"
import Filter from "./komponentit/Filter"
import PersonForm from "./komponentit/PersonForm"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

const addPerson = (event) => {
  event.preventDefault()
  const newPerson = {
    name: newName,
    number: newNumber
  }
  const foundPerson = persons.find(person => person.name == newPerson.name)
  if (foundPerson !== undefined) {
    alert(foundPerson.name + ' already in phonebook')
    return
  }
  setPersons(persons.concat(newPerson))
  setNewName('')
  setNewNumber('')
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
      <Persons persons = {persons} filterPerson = {newFilter} />
    </div>
  )

}

export default App