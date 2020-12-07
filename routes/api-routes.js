const path = require("path");
const savedNotes = require("../db/db.json");
const fs = require("fs");
const { dirname } = require("path");

//sets up file paths for /notes and /everythingElse to send to pages.
module.exports = function (app) {
  //gets note data from json file
  app.get("/api/notes", function (req, res) {
    res.json(savedNotes);
  });

  app.post("/api/notes", function (req, res) {
    savedNotes.push(req.body); //this pushes the new data to api/notes
    res.json({ savedNotes });

    fs.writeFile(
      __dirname + "../db/db.json",
      JSON.stringify(savedNotes),
      function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log("writing to " + fileName);
      }
    );
  });
};
