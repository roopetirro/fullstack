const filterNames = (persons, filterPerson) => {
  return (
    persons.filter((person) => person.name.toLowerCase().indexOf(filterPerson.toLowerCase()) !== -1)
  )
}  

const Persons = ({persons, filterPerson}) => {
  return (
    <div>
      {filterNames(persons, filterPerson).map((person) => (
        <div key = {person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

export default Persons