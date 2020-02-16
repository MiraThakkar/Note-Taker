var jsonData = [];
var jsonfile = require('jsonfile');
var maxId = 0;


module.exports = function(app) {

  // ====API GET========

  app.get('/api/notes', (req, res) => {
    jsonfile.readFile("./db/db.json", function(err, savedNote) {
      if (err) {
        throw err;
      }else {
        jsonData = savedNote;
        //find the max id
        if (savedNote.length == 0) {
          maxID = 0;
        } else {
          maxId = parseInt(savedNote[savedNote.length - 1].id);
        }
        res.send(savedNote);
      }
  });
});

  // ====API POST========

  app.post("/api/notes", function (req, res) {
    var newData = req.body;
    newData.id = maxId + 1;
    maxId++;
    jsonData.push(newData);
    jsonfile.writeFile("./db/db.json", jsonData, function(err) {
      if (err) throw err;
    });
    res.end();
  });

  // ====API DELETE========

  app.delete("/api/notes/:id", function(req, res) {
    var id = parseInt(req.params.id);
    // read in the JSON file
    jsonfile.readFile("./db/db.json", function(err, savedNote) {
        if (err) {
          throw err;
        }else {
          // Using another variable to prevent confusion.
          for( let i=0; i<savedNote.length; i++){
            if(parseInt(savedNote[i].id) === id ){
                savedNote.splice(i, 1);     
            }
          }
          jsonfile.writeFile("./db/db.json", savedNote, function(err) {
              if (err) {
                throw err;
              }else{
                console.log("Json file written success after delete.");
              }
          });
          res.send(savedNote);
        }
     });
    });
}