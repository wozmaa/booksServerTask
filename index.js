const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json);
app.use(require("./routes/books.route"));
app.use(require("./routes/genres.route"));
app.use(require("./routes/reviews.route"));
app.use(require("./routes/authors.route"));

mongoose
  .connect(
    "mongodb+srv://intocode:Ma16pagava@cluster0.cajlu.mongodb.net/students?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
