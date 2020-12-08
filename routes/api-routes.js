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

  //posts user note to api/notes and db.json
  app.post("/api/notes", function (req, res) {
    //pushes user entry to /api/notes
    savedNotes.push(req.body);
    res.json({ savedNotes });
    console.log(savedNotes);

    //takes the api note data and updates db.json
    fs.writeFile(
      path.join(__dirname, "../db/", "db.json"),
      JSON.stringify(savedNotes),
      function writeJSON(err) {
        if (err) return console.log(err);
      }
    );
  });
};
