const express = require("express");
const path = require('path');
const mongoose = require("mongoose");

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req,res) => {
  return "Hello"
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });