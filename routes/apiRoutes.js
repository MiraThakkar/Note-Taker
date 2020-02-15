var data = require("../db/db.json");
var uniqueID = 1;

module.exports = function(app) {
    app.get('/api/notes', (req, res) => {
        console.log(res)
        res.send(data);
      });

    app.post("/api/notes", function (req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
      var newData = req.body;
      newData.id = uniqueID;
      data.push(newData);
      uniqueID++;
      res.end();
    });

};
