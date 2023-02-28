const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require('cors');

app.use(express.json());

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.use(cors())

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
)

morgan.token("data", function (req) { return req.method === "POST" ? JSON.stringify(req.body): ""
})

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const personToFind = persons.find((person) => person.id === id);
  if (personToFind) {
    response.json(personToFind);
  } else {
    response.status(404).end();
  }
});

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/info", (request, response) => {
  response.send(
    `<p>
      Phonebook has info for ${persons.length} people
      <p>${new Date()}</p>
    </p>`
  );
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const generateId = () => {
  const newId = Math.floor(Math.random() * 100000) + 1
  const sameIdExists = persons.find((person) => person.id === newId)
  return sameIdExists ? generateId() : newId
};

app.post("/api/persons", (request, response) => {
  const name = request.body.name
  const number = request.body.number

  if (!name || !number) {
    return response.status(400).json({
      error: "name or number missing",
    })
  }

  if (persons.find((person) => person.name === name)) {
    return response.status(400).json({
        error: "this name is already in the phonebook"
    })
  }

  const person = {
    name: name,
    number: number,
    id: generateId()
  };

  persons = persons.concat(person);

  response.json(person);
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
