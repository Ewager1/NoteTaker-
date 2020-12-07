const path = require("path");
const savedNotes = require('../db/db.json')

//sets up file paths for /notes and /everythingElse to send to pages.
module.exports = function (app) {
  //gets note data from json file
  app.get("/api/notes", function (req, res) {
    res.json(savedNotes);
    console.log(savedNotes)
  });

};
