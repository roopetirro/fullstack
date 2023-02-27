import personService from '../services/persons'

const filterNames = (persons, filterPerson) => {
  return (
    persons.filter((person) => person.name.toLowerCase().indexOf(filterPerson.toLowerCase()) !== -1)
  )
}  

const Persons = ({persons, filterPerson, deletePerson, setMessage}) => {

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          deletePerson(persons.filter(person => person.id !== id))
          setMessage(`${name} deleted`)
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <div>
      {filterNames(persons, filterPerson).map((person) => (
        <div key = {person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default Persons