const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
  {
    id: 4,
    content: "front and back are connected",
    date: "2021-05-30T19:20:14.298Z",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<div> <h1>helo harry</h1> <h3>this is test</h3></div>");
});
app.get("/app/notes", (request, response) => {
  response.send(notes);
});

app.get("/app/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((eachNote) => eachNote.id === id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end;
  }
});

app.delete("/app/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((eachNote) => eachNote.id === id);
  response.status(204).end();
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  console.log("max Id : ", maxId);
  return maxId + 1;
};

app.post("/app/notes", (request, response) => {
  const body = request.body;
  console.log(request);
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  };
  notes = notes.concat(note);
  response.json(note);
});

app.use(express.static("build"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
