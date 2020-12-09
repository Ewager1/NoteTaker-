const path = require("path");
const savedNotes = require("../db/db.json");
const fs = require("fs");
const dirname = require("path");

//function: takes the api note data and updates db.json
function updateDataBase() {
  fs.writeFile(
    path.join(__dirname, "../db/", "db.json"),
    JSON.stringify(savedNotes),
    function writeJSON(err) {
      if (err) return console.log(err);
    }
  );
}

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

    //takes the api note data and updates db.json
    updateDataBase();
  });

  app.delete("/api/notes/:id", function (req, res) {
    // Grabs id from params
    let id = req.params.id;

    // tries to match id value with params id
    for (i = 0; i < savedNotes.length; i++) {
      if (savedNotes[i].id == id) {
        // sends back the note to be deleted
        res.send(savedNotes[i]);

        // Removes the deleted note
        savedNotes.splice(i, 1);
      }
    }
    updateDataBase();
  });
};
