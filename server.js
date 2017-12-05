

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var information = [
    {
      Name: "Jeferey",
      Age: 5,
      role: 8,
      age: 9,
      forcePoints: 12
    },
    {
      Name: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },
    {
      routeName: "obiwankenobi",
      name: "Obi Wan Kenobi",
      role: "Jedi Master",
      age: 55,
      forcePoints: 1350
    }
  ];

  app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newinformation = req.body;
    newinformation.routeName = newinformation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newinformation);
  
    information.push(newinformation);
  
    res.json(newinformation);

    var whatever = req.params

    wallpost.push(whatever);
  });



app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });