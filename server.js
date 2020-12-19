const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

const db = require('./db')
const bookRouter = require('./routes/book-router')

const app = express()
const apiPort = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(_dirname, "client", "build")))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', bookRouter)

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "client", "build", "index.html"));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))