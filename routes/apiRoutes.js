var data = require("../db/db.json");
// var uniqueID = 1;

module.exports = function(app) {
  app.get('/api/notes', (req, res) => {
      res.send(data);
    });

  app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newData = req.body;
    data.push(newData);
    res.end();
  });


  app.delete("api/notes/:id", function(req, res){
    alert("inside delete route");
      let key = req.params.id;
      console.log(key);
      for( let i=0; i<data.length; i++){
          if(data[i].id === key ){
            data.splice(key, 1);
            res.send(data);
          }
      }
  });
};
