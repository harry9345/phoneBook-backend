const mongoose = require("mongoose");
if (process.argv.lenght < 3) {
  console.log(" password ");
  process.exitCode(1);
}

const password = process.argv[2];

const url = `mongodb+srv://salam:${password}@cluster0.gccik.mongodb.net/note-app?retryWrites=true&w=majority`;

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
