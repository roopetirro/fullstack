const Header = ({header}) => {
    return (
      <h2>
        {header}
      </h2> 
    )
  }
  
  const Part = ({exercise, part}) => {
    return (
      <p>
        {part} {exercise}
      </p>
    )
  }
  
  const Content = ({parts}) => {
    const map1 = parts.map(part => <Part part = {part.name} exercise = {part.exercises} key = {part.id} />)
    return (
      <div>
        {map1}
      </div>
    )
  }
  
  const Course = ({course: {name, parts}}) => {
    return (
      <>
        <Header header = {name} />
        <Content parts = {parts} /> 
        <Total parts = {parts} />
      </>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => {
      return sum + part.exercises},
      0)
  
    return (
      <b>
        exercises in total {total}
      </b>
    )
  }

  export default Course