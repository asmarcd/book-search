const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static("client/public"))

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const bookRouter = require('./routes/book-router')
app.use('/api', bookRouter)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public"));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });