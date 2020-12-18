var express = require("express");
var router = express.Router();
var db = require("../models");

// Route to display all saved books
router.get("/api/books", function (req, res) {
    db.googlebooks.findAll()
        .then(result => res.json(result))
        .catch(err => res.status(404).send(err))
});
