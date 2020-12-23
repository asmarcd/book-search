const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const uri = 'mongodb+srv://googlebooks:vMspysdMtv50Jh4J@cluster0.zcfo6.mongodb.net/googlebooks?retryWrites=true&w=majority'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected')
}).catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bookRouter = require('./routes/book-router')
app.use('/api', bookRouter)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});